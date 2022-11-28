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
import { ProfilerConfig } from "./profilerconfig";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
import { ProfilerRuleEvaluationStatus } from "./profilerruleevaluationstatus";
import { ProfilingStatusEnum } from "./profilingstatusenum";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { SecondaryStatusEnum } from "./secondarystatusenum";
import { SecondaryStatusTransition } from "./secondarystatustransition";
import { StoppingCondition } from "./stoppingcondition";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
import { VpcConfig } from "./vpcconfig";
var DescribeTrainingJobResponse = /** @class */ (function (_super) {
    __extends(DescribeTrainingJobResponse, _super);
    function DescribeTrainingJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" }),
        __metadata("design:type", AlgorithmSpecification)
    ], DescribeTrainingJobResponse.prototype, "algorithmSpecification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "autoMlJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BillableTimeInSeconds" }),
        __metadata("design:type", Number)
    ], DescribeTrainingJobResponse.prototype, "billableTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CheckpointConfig" }),
        __metadata("design:type", CheckpointConfig)
    ], DescribeTrainingJobResponse.prototype, "checkpointConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], DescribeTrainingJobResponse.prototype, "creationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugHookConfig" }),
        __metadata("design:type", DebugHookConfig)
    ], DescribeTrainingJobResponse.prototype, "debugHookConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugRuleConfigurations", elemType: DebugRuleConfiguration }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "debugRuleConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebugRuleEvaluationStatuses", elemType: DebugRuleEvaluationStatus }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "debugRuleEvaluationStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" }),
        __metadata("design:type", Boolean)
    ], DescribeTrainingJobResponse.prototype, "enableInterContainerTrafficEncryption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" }),
        __metadata("design:type", Boolean)
    ], DescribeTrainingJobResponse.prototype, "enableManagedSpotTraining", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" }),
        __metadata("design:type", Boolean)
    ], DescribeTrainingJobResponse.prototype, "enableNetworkIsolation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Environment" }),
        __metadata("design:type", Map)
    ], DescribeTrainingJobResponse.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExperimentConfig" }),
        __metadata("design:type", ExperimentConfig)
    ], DescribeTrainingJobResponse.prototype, "experimentConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailureReason" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "failureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalMetricDataList", elemType: MetricData }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "finalMetricDataList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HyperParameters" }),
        __metadata("design:type", Map)
    ], DescribeTrainingJobResponse.prototype, "hyperParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "inputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LabelingJobArn" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "labelingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastModifiedTime" }),
        __metadata("design:type", Date)
    ], DescribeTrainingJobResponse.prototype, "lastModifiedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ModelArtifacts" }),
        __metadata("design:type", ModelArtifacts)
    ], DescribeTrainingJobResponse.prototype, "modelArtifacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OutputDataConfig" }),
        __metadata("design:type", OutputDataConfig)
    ], DescribeTrainingJobResponse.prototype, "outputDataConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilerConfig" }),
        __metadata("design:type", ProfilerConfig)
    ], DescribeTrainingJobResponse.prototype, "profilerConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilerRuleConfigurations", elemType: ProfilerRuleConfiguration }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "profilerRuleConfigurations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilerRuleEvaluationStatuses", elemType: ProfilerRuleEvaluationStatus }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "profilerRuleEvaluationStatuses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProfilingStatus" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "profilingStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", ResourceConfig)
    ], DescribeTrainingJobResponse.prototype, "resourceConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RetryStrategy" }),
        __metadata("design:type", RetryStrategy)
    ], DescribeTrainingJobResponse.prototype, "retryStrategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleArn" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "roleArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryStatus" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "secondaryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryStatusTransitions", elemType: SecondaryStatusTransition }),
        __metadata("design:type", Array)
    ], DescribeTrainingJobResponse.prototype, "secondaryStatusTransitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StoppingCondition" }),
        __metadata("design:type", StoppingCondition)
    ], DescribeTrainingJobResponse.prototype, "stoppingCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TensorBoardOutputConfig" }),
        __metadata("design:type", TensorBoardOutputConfig)
    ], DescribeTrainingJobResponse.prototype, "tensorBoardOutputConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingEndTime" }),
        __metadata("design:type", Date)
    ], DescribeTrainingJobResponse.prototype, "trainingEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobArn" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "trainingJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobName" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "trainingJobName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "trainingJobStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingStartTime" }),
        __metadata("design:type", Date)
    ], DescribeTrainingJobResponse.prototype, "trainingStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrainingTimeInSeconds" }),
        __metadata("design:type", Number)
    ], DescribeTrainingJobResponse.prototype, "trainingTimeInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TuningJobArn" }),
        __metadata("design:type", String)
    ], DescribeTrainingJobResponse.prototype, "tuningJobArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VpcConfig" }),
        __metadata("design:type", VpcConfig)
    ], DescribeTrainingJobResponse.prototype, "vpcConfig", void 0);
    return DescribeTrainingJobResponse;
}(SpeakeasyBase));
export { DescribeTrainingJobResponse };
