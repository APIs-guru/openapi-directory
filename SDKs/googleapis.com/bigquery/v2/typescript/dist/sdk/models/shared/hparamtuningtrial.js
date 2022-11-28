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
import { EvaluationMetrics } from "./evaluationmetrics";
import { TrainingOptions } from "./trainingoptions";
export var HparamTuningTrialStatusEnum;
(function (HparamTuningTrialStatusEnum) {
    HparamTuningTrialStatusEnum["TrialStatusUnspecified"] = "TRIAL_STATUS_UNSPECIFIED";
    HparamTuningTrialStatusEnum["NotStarted"] = "NOT_STARTED";
    HparamTuningTrialStatusEnum["Running"] = "RUNNING";
    HparamTuningTrialStatusEnum["Succeeded"] = "SUCCEEDED";
    HparamTuningTrialStatusEnum["Failed"] = "FAILED";
    HparamTuningTrialStatusEnum["Infeasible"] = "INFEASIBLE";
    HparamTuningTrialStatusEnum["StoppedEarly"] = "STOPPED_EARLY";
})(HparamTuningTrialStatusEnum || (HparamTuningTrialStatusEnum = {}));
// HparamTuningTrial
/**
 * Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models.
**/
var HparamTuningTrial = /** @class */ (function (_super) {
    __extends(HparamTuningTrial, _super);
    function HparamTuningTrial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTimeMs" }),
        __metadata("design:type", String)
    ], HparamTuningTrial.prototype, "endTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], HparamTuningTrial.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evalLoss" }),
        __metadata("design:type", Number)
    ], HparamTuningTrial.prototype, "evalLoss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evaluationMetrics" }),
        __metadata("design:type", EvaluationMetrics)
    ], HparamTuningTrial.prototype, "evaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparamTuningEvaluationMetrics" }),
        __metadata("design:type", EvaluationMetrics)
    ], HparamTuningTrial.prototype, "hparamTuningEvaluationMetrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hparams" }),
        __metadata("design:type", TrainingOptions)
    ], HparamTuningTrial.prototype, "hparams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTimeMs" }),
        __metadata("design:type", String)
    ], HparamTuningTrial.prototype, "startTimeMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], HparamTuningTrial.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trainingLoss" }),
        __metadata("design:type", Number)
    ], HparamTuningTrial.prototype, "trainingLoss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialId" }),
        __metadata("design:type", String)
    ], HparamTuningTrial.prototype, "trialId", void 0);
    return HparamTuningTrial;
}(SpeakeasyBase));
export { HparamTuningTrial };
