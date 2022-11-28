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
import { CustomMessageActivity } from "./custommessageactivity";
import { ConditionalSplitActivity } from "./conditionalsplitactivity";
import { EmailMessageActivity } from "./emailmessageactivity";
import { HoldoutActivity } from "./holdoutactivity";
import { MultiConditionalSplitActivity } from "./multiconditionalsplitactivity";
import { PushMessageActivity } from "./pushmessageactivity";
import { RandomSplitActivity } from "./randomsplitactivity";
import { SmsMessageActivity } from "./smsmessageactivity";
import { WaitActivity } from "./waitactivity";
// Activity
/**
 * Specifies the configuration and other settings for an activity in a journey.
**/
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CUSTOM" }),
        __metadata("design:type", CustomMessageActivity)
    ], Activity.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConditionalSplit" }),
        __metadata("design:type", ConditionalSplitActivity)
    ], Activity.prototype, "conditionalSplit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Activity.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EMAIL" }),
        __metadata("design:type", EmailMessageActivity)
    ], Activity.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Holdout" }),
        __metadata("design:type", HoldoutActivity)
    ], Activity.prototype, "holdout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiCondition" }),
        __metadata("design:type", MultiConditionalSplitActivity)
    ], Activity.prototype, "multiCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PUSH" }),
        __metadata("design:type", PushMessageActivity)
    ], Activity.prototype, "push", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RandomSplit" }),
        __metadata("design:type", RandomSplitActivity)
    ], Activity.prototype, "randomSplit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SMS" }),
        __metadata("design:type", SmsMessageActivity)
    ], Activity.prototype, "sms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wait" }),
        __metadata("design:type", WaitActivity)
    ], Activity.prototype, "wait", void 0);
    return Activity;
}(SpeakeasyBase));
export { Activity };
