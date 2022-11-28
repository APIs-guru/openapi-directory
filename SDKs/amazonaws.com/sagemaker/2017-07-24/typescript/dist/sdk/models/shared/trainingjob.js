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
import { AlgorithmSpecification } from "./algorithmspecification";
import { CheckpointConfig } from "./checkpointconfig";
import { DebugHookConfig } from "./debughookconfig";
import { DebugRuleConfiguration } from "./debugruleconfiguration";
import { DebugRuleEvaluationStatus } from "./debugruleevaluationstatus";
import { ExperimentConfig } from "./experimentconfig";
import { MetricData } from "./metricdata";
import { Channel } from "./channel";
import { ModelArtifacts } from "./modelartifacts";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { SecondaryStatusEnum } from "./secondarystatusenum";
import { SecondaryStatusTransition } from "./secondarystatustransition";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
import { VpcConfig } from "./vpcconfig";
// TrainingJob
/**
 * Contains information about a training job.
**/
var TrainingJob = /** @class */ (function (_super) {
    __extends(TrainingJob, _super);
    function TrainingJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" }),
        __metadata("design:type", AlgorithmSpecification)
    ], TrainingJob.prototype, "algorithmSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "autoMlJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillableTimeInSeconds" }),
        __metadata("design:type", Number)
    ], TrainingJob.prototype, "billableTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CheckpointConfig" }),
        __metadata("design:type", CheckpointConfig)
    ], TrainingJob.prototype, "checkpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], TrainingJob.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugHookConfig" }),
        __metadata("design:type", DebugHookConfig)
    ], TrainingJob.prototype, "debugHookConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugRuleConfigurations", elemType: DebugRuleConfiguration }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "debugRuleConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugRuleEvaluationStatuses", elemType: DebugRuleEvaluationStatus }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "debugRuleEvaluationStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" }),
        __metadata("design:type", Boolean)
    ], TrainingJob.prototype, "enableInterContainerTrafficEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" }),
        __metadata("design:type", Boolean)
    ], TrainingJob.prototype, "enableManagedSpotTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" }),
        __metadata("design:type", Boolean)
    ], TrainingJob.prototype, "enableNetworkIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], TrainingJob.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentConfig" }),
        __metadata("design:type", ExperimentConfig)
    ], TrainingJob.prototype, "experimentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalMetricDataList", elemType: MetricData }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "finalMetricDataList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameters" }),
        __metadata("design:type", Map)
    ], TrainingJob.prototype, "hyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobArn" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "labelingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], TrainingJob.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArtifacts" }),
        __metadata("design:type", ModelArtifacts)
    ], TrainingJob.prototype, "modelArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", OutputDataConfig)
    ], TrainingJob.prototype, "outputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", ResourceConfig)
    ], TrainingJob.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], TrainingJob.prototype, "retryStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryStatus" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "secondaryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryStatusTransitions", elemType: SecondaryStatusTransition }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "secondaryStatusTransitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", StoppingCondition)
    ], TrainingJob.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], TrainingJob.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TensorBoardOutputConfig" }),
        __metadata("design:type", TensorBoardOutputConfig)
    ], TrainingJob.prototype, "tensorBoardOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingEndTime" }),
        __metadata("design:type", Date)
    ], TrainingJob.prototype, "trainingEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobArn" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "trainingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobName" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "trainingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "trainingJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingStartTime" }),
        __metadata("design:type", Date)
    ], TrainingJob.prototype, "trainingStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingTimeInSeconds" }),
        __metadata("design:type", Number)
    ], TrainingJob.prototype, "trainingTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningJobArn" }),
        __metadata("design:type", String)
    ], TrainingJob.prototype, "tuningJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], TrainingJob.prototype, "vpcConfig", void 0);
    return TrainingJob;
}(SpeakeasyBase));
export { TrainingJob };
