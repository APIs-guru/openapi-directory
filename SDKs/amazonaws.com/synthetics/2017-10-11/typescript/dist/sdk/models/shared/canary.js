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
import { CanaryCodeOutput } from "./canarycodeoutput";
import { CanaryRunConfigOutput } from "./canaryrunconfigoutput";
import { CanaryScheduleOutput } from "./canaryscheduleoutput";
import { CanaryStatus } from "./canarystatus";
import { CanaryTimeline } from "./canarytimeline";
import { VisualReferenceOutput } from "./visualreferenceoutput";
import { VpcConfigOutput } from "./vpcconfigoutput";
// Canary
/**
 * This structure contains all information about one canary in your account.
**/
var Canary = /** @class */ (function (_super) {
    __extends(Canary, _super);
    function Canary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=ArtifactS3Location" }),
        __metadata("design:type", String)
    ], Canary.prototype, "artifactS3Location", void 0);
    __decorate([
        Metadata({ data: "json, name=Code" }),
        __metadata("design:type", CanaryCodeOutput)
    ], Canary.prototype, "code", void 0);
    __decorate([
        Metadata({ data: "json, name=EngineArn" }),
        __metadata("design:type", String)
    ], Canary.prototype, "engineArn", void 0);
    __decorate([
        Metadata({ data: "json, name=ExecutionRoleArn" }),
        __metadata("design:type", String)
    ], Canary.prototype, "executionRoleArn", void 0);
    __decorate([
        Metadata({ data: "json, name=FailureRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], Canary.prototype, "failureRetentionPeriodInDays", void 0);
    __decorate([
        Metadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], Canary.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Canary.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=RunConfig" }),
        __metadata("design:type", CanaryRunConfigOutput)
    ], Canary.prototype, "runConfig", void 0);
    __decorate([
        Metadata({ data: "json, name=RuntimeVersion" }),
        __metadata("design:type", String)
    ], Canary.prototype, "runtimeVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=Schedule" }),
        __metadata("design:type", CanaryScheduleOutput)
    ], Canary.prototype, "schedule", void 0);
    __decorate([
        Metadata({ data: "json, name=Status" }),
        __metadata("design:type", CanaryStatus)
    ], Canary.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=SuccessRetentionPeriodInDays" }),
        __metadata("design:type", Number)
    ], Canary.prototype, "successRetentionPeriodInDays", void 0);
    __decorate([
        Metadata({ data: "json, name=Tags" }),
        __metadata("design:type", Map)
    ], Canary.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=Timeline" }),
        __metadata("design:type", CanaryTimeline)
    ], Canary.prototype, "timeline", void 0);
    __decorate([
        Metadata({ data: "json, name=VisualReference" }),
        __metadata("design:type", VisualReferenceOutput)
    ], Canary.prototype, "visualReference", void 0);
    __decorate([
        Metadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfigOutput)
    ], Canary.prototype, "vpcConfig", void 0);
    return Canary;
}(SpeakeasyBase));
export { Canary };
