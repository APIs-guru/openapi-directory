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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RobotDeploymentStepEnum } from "./robotdeploymentstepenum";
// ProgressDetail
/**
 * Information about the progress of a deployment job.
**/
var ProgressDetail = /** @class */ (function (_super) {
    __extends(ProgressDetail, _super);
    function ProgressDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currentProgress" }),
        __metadata("design:type", String)
    ], ProgressDetail.prototype, "currentProgress", void 0);
    __decorate([
        Metadata({ data: "json, name=estimatedTimeRemainingSeconds" }),
        __metadata("design:type", Number)
    ], ProgressDetail.prototype, "estimatedTimeRemainingSeconds", void 0);
    __decorate([
        Metadata({ data: "json, name=percentDone" }),
        __metadata("design:type", Number)
    ], ProgressDetail.prototype, "percentDone", void 0);
    __decorate([
        Metadata({ data: "json, name=targetResource" }),
        __metadata("design:type", String)
    ], ProgressDetail.prototype, "targetResource", void 0);
    return ProgressDetail;
}(SpeakeasyBase));
export { ProgressDetail };
