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
import { ProcessingInstanceTypeEnum } from "./processinginstancetypeenum";
// DebugRuleConfiguration
/**
 * Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
**/
var DebugRuleConfiguration = /** @class */ (function (_super) {
    __extends(DebugRuleConfiguration, _super);
    function DebugRuleConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceType" }),
        __metadata("design:type", String)
    ], DebugRuleConfiguration.prototype, "instanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalPath" }),
        __metadata("design:type", String)
    ], DebugRuleConfiguration.prototype, "localPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleConfigurationName" }),
        __metadata("design:type", String)
    ], DebugRuleConfiguration.prototype, "ruleConfigurationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleEvaluatorImage" }),
        __metadata("design:type", String)
    ], DebugRuleConfiguration.prototype, "ruleEvaluatorImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RuleParameters" }),
        __metadata("design:type", Map)
    ], DebugRuleConfiguration.prototype, "ruleParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3OutputPath" }),
        __metadata("design:type", String)
    ], DebugRuleConfiguration.prototype, "s3OutputPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VolumeSizeInGB" }),
        __metadata("design:type", Number)
    ], DebugRuleConfiguration.prototype, "volumeSizeInGb", void 0);
    return DebugRuleConfiguration;
}(SpeakeasyBase));
export { DebugRuleConfiguration };
