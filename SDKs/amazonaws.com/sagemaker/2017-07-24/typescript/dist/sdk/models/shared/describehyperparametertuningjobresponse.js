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
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
var DescribeHyperParameterTuningJobResponse = /** @class */ (function (_super) {
    __extends(DescribeHyperParameterTuningJobResponse, _super);
    function DescribeHyperParameterTuningJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BestTrainingJob" }),
        __metadata("design:type", HyperParameterTrainingJobSummary)
    ], DescribeHyperParameterTuningJobResponse.prototype, "bestTrainingJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeHyperParameterTuningJobResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningEndTime" }),
        __metadata("design:type", Date)
    ], DescribeHyperParameterTuningJobResponse.prototype, "hyperParameterTuningEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobArn" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobResponse.prototype, "hyperParameterTuningJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobConfig" }),
        __metadata("design:type", HyperParameterTuningJobConfig)
    ], DescribeHyperParameterTuningJobResponse.prototype, "hyperParameterTuningJobConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobResponse.prototype, "hyperParameterTuningJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobStatus" }),
        __metadata("design:type", String)
    ], DescribeHyperParameterTuningJobResponse.prototype, "hyperParameterTuningJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeHyperParameterTuningJobResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ObjectiveStatusCounters" }),
        __metadata("design:type", ObjectiveStatusCounters)
    ], DescribeHyperParameterTuningJobResponse.prototype, "objectiveStatusCounters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverallBestTrainingJob" }),
        __metadata("design:type", HyperParameterTrainingJobSummary)
    ], DescribeHyperParameterTuningJobResponse.prototype, "overallBestTrainingJob", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobDefinition" }),
        __metadata("design:type", HyperParameterTrainingJobDefinition)
    ], DescribeHyperParameterTuningJobResponse.prototype, "trainingJobDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobDefinitions", elemType: HyperParameterTrainingJobDefinition }),
        __metadata("design:type", Array)
    ], DescribeHyperParameterTuningJobResponse.prototype, "trainingJobDefinitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobStatusCounters" }),
        __metadata("design:type", TrainingJobStatusCounters)
    ], DescribeHyperParameterTuningJobResponse.prototype, "trainingJobStatusCounters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WarmStartConfig" }),
        __metadata("design:type", HyperParameterTuningJobWarmStartConfig)
    ], DescribeHyperParameterTuningJobResponse.prototype, "warmStartConfig", void 0);
    return DescribeHyperParameterTuningJobResponse;
}(SpeakeasyBase));
export { DescribeHyperParameterTuningJobResponse };
