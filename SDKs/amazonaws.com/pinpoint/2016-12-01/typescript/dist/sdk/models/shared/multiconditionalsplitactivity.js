var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MultiConditionalBranch } from "./multiconditionalbranch";
import { WaitTime } from "./waittime";
// MultiConditionalSplitActivity
/**
 * <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note>
**/
var MultiConditionalSplitActivity = /** @class */ (function (_super) {
    __extends(MultiConditionalSplitActivity, _super);
    function MultiConditionalSplitActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Branches", elemType: MultiConditionalBranch }),
        __metadata("design:type", Array)
    ], MultiConditionalSplitActivity.prototype, "branches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultActivity" }),
        __metadata("design:type", String)
    ], MultiConditionalSplitActivity.prototype, "defaultActivity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EvaluationWaitTime" }),
        __metadata("design:type", WaitTime)
    ], MultiConditionalSplitActivity.prototype, "evaluationWaitTime", void 0);
    return MultiConditionalSplitActivity;
}(SpeakeasyBase));
export { MultiConditionalSplitActivity };
