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
import { FinalHyperParameterTuningJobObjectiveMetric } from "./finalhyperparametertuningjobobjectivemetric";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
// HyperParameterTrainingJobSummary
/**
 * Specifies summary information about a training job.
**/
var HyperParameterTrainingJobSummary = /** @class */ (function (_super) {
    __extends(HyperParameterTrainingJobSummary, _super);
    function HyperParameterTrainingJobSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], HyperParameterTrainingJobSummary.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalHyperParameterTuningJobObjectiveMetric" }),
        __metadata("design:type", FinalHyperParameterTuningJobObjectiveMetric)
    ], HyperParameterTrainingJobSummary.prototype, "finalHyperParameterTuningJobObjectiveMetric", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectiveStatus" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "objectiveStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingEndTime" }),
        __metadata("design:type", Date)
    ], HyperParameterTrainingJobSummary.prototype, "trainingEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobArn" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "trainingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobDefinitionName" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "trainingJobDefinitionName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobName" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "trainingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "trainingJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingStartTime" }),
        __metadata("design:type", Date)
    ], HyperParameterTrainingJobSummary.prototype, "trainingStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TunedHyperParameters" }),
        __metadata("design:type", Map)
    ], HyperParameterTrainingJobSummary.prototype, "tunedHyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningJobName" }),
        __metadata("design:type", String)
    ], HyperParameterTrainingJobSummary.prototype, "tuningJobName", void 0);
    return HyperParameterTrainingJobSummary;
}(SpeakeasyBase));
export { HyperParameterTrainingJobSummary };
