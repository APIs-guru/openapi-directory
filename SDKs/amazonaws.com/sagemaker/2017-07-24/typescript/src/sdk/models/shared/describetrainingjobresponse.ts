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



export class DescribeTrainingJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: AlgorithmSpecification;

  @SpeakeasyMetadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=BillableTimeInSeconds" })
  billableTimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DebugHookConfig" })
  debugHookConfig?: DebugHookConfig;

  @SpeakeasyMetadata({ data: "json, name=DebugRuleConfigurations", elemType: DebugRuleConfiguration })
  debugRuleConfigurations?: DebugRuleConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=DebugRuleEvaluationStatuses", elemType: DebugRuleEvaluationStatus })
  debugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  @SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" })
  enableManagedSpotTraining?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @SpeakeasyMetadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalMetricDataList", elemType: MetricData })
  finalMetricDataList?: MetricData[];

  @SpeakeasyMetadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel })
  inputDataConfig?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelArtifacts" })
  modelArtifacts: ModelArtifacts;

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfig;

  @SpeakeasyMetadata({ data: "json, name=ProfilerRuleConfigurations", elemType: ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=ProfilerRuleEvaluationStatuses", elemType: ProfilerRuleEvaluationStatus })
  profilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[];

  @SpeakeasyMetadata({ data: "json, name=ProfilingStatus" })
  profilingStatus?: ProfilingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryStatus" })
  secondaryStatus: SecondaryStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SecondaryStatusTransitions", elemType: SecondaryStatusTransition })
  secondaryStatusTransitions?: SecondaryStatusTransition[];

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=TensorBoardOutputConfig" })
  tensorBoardOutputConfig?: TensorBoardOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrainingTimeInSeconds" })
  trainingTimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TuningJobArn" })
  tuningJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
