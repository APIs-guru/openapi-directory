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
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { ParameterRanges } from "./parameterranges";
import { ResourceLimits } from "./resourcelimits";
import { HyperParameterTuningJobStrategyTypeEnum } from "./hyperparametertuningjobstrategytypeenum";
import { TrainingJobEarlyStoppingTypeEnum } from "./trainingjobearlystoppingtypeenum";
import { TuningJobCompletionCriteria } from "./tuningjobcompletioncriteria";
// HyperParameterTuningJobConfig
/**
 * Configures a hyperparameter tuning job.
**/
var HyperParameterTuningJobConfig = /** @class */ (function (_super) {
    __extends(HyperParameterTuningJobConfig, _super);
    function HyperParameterTuningJobConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobObjective" }),
        __metadata("design:type", HyperParameterTuningJobObjective)
    ], HyperParameterTuningJobConfig.prototype, "hyperParameterTuningJobObjective", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParameterRanges" }),
        __metadata("design:type", ParameterRanges)
    ], HyperParameterTuningJobConfig.prototype, "parameterRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceLimits" }),
        __metadata("design:type", ResourceLimits)
    ], HyperParameterTuningJobConfig.prototype, "resourceLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Strategy" }),
        __metadata("design:type", String)
    ], HyperParameterTuningJobConfig.prototype, "strategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobEarlyStoppingType" }),
        __metadata("design:type", String)
    ], HyperParameterTuningJobConfig.prototype, "trainingJobEarlyStoppingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningJobCompletionCriteria" }),
        __metadata("design:type", TuningJobCompletionCriteria)
    ], HyperParameterTuningJobConfig.prototype, "tuningJobCompletionCriteria", void 0);
    return HyperParameterTuningJobConfig;
}(SpeakeasyBase));
export { HyperParameterTuningJobConfig };
