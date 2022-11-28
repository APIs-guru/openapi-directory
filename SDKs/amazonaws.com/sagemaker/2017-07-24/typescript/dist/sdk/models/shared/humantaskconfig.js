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
import { AnnotationConsolidationConfig } from "./annotationconsolidationconfig";
import { PublicWorkforceTaskPrice } from "./publicworkforcetaskprice";
import { UiConfig } from "./uiconfig";
// HumanTaskConfig
/**
 * Information required for human workers to complete a labeling task.
**/
var HumanTaskConfig = /** @class */ (function (_super) {
    __extends(HumanTaskConfig, _super);
    function HumanTaskConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnotationConsolidationConfig" }),
        __metadata("design:type", AnnotationConsolidationConfig)
    ], HumanTaskConfig.prototype, "annotationConsolidationConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxConcurrentTaskCount" }),
        __metadata("design:type", Number)
    ], HumanTaskConfig.prototype, "maxConcurrentTaskCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfHumanWorkersPerDataObject" }),
        __metadata("design:type", Number)
    ], HumanTaskConfig.prototype, "numberOfHumanWorkersPerDataObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreHumanTaskLambdaArn" }),
        __metadata("design:type", String)
    ], HumanTaskConfig.prototype, "preHumanTaskLambdaArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PublicWorkforceTaskPrice" }),
        __metadata("design:type", PublicWorkforceTaskPrice)
    ], HumanTaskConfig.prototype, "publicWorkforceTaskPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskAvailabilityLifetimeInSeconds" }),
        __metadata("design:type", Number)
    ], HumanTaskConfig.prototype, "taskAvailabilityLifetimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskDescription" }),
        __metadata("design:type", String)
    ], HumanTaskConfig.prototype, "taskDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskKeywords" }),
        __metadata("design:type", Array)
    ], HumanTaskConfig.prototype, "taskKeywords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskTimeLimitInSeconds" }),
        __metadata("design:type", Number)
    ], HumanTaskConfig.prototype, "taskTimeLimitInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaskTitle" }),
        __metadata("design:type", String)
    ], HumanTaskConfig.prototype, "taskTitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UiConfig" }),
        __metadata("design:type", UiConfig)
    ], HumanTaskConfig.prototype, "uiConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkteamArn" }),
        __metadata("design:type", String)
    ], HumanTaskConfig.prototype, "workteamArn", void 0);
    return HumanTaskConfig;
}(SpeakeasyBase));
export { HumanTaskConfig };
