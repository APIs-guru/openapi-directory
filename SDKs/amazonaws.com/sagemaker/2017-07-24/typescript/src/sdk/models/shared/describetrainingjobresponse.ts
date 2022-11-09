import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: AlgorithmSpecification;

  @Metadata({ data: "json, name=AutoMLJobArn" })
  autoMlJobArn?: string;

  @Metadata({ data: "json, name=BillableTimeInSeconds" })
  billableTimeInSeconds?: number;

  @Metadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=DebugHookConfig" })
  debugHookConfig?: DebugHookConfig;

  @Metadata({ data: "json, name=DebugRuleConfigurations", elemType: shared.DebugRuleConfiguration })
  debugRuleConfigurations?: DebugRuleConfiguration[];

  @Metadata({ data: "json, name=DebugRuleEvaluationStatuses", elemType: shared.DebugRuleEvaluationStatus })
  debugRuleEvaluationStatuses?: DebugRuleEvaluationStatus[];

  @Metadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @Metadata({ data: "json, name=EnableManagedSpotTraining" })
  enableManagedSpotTraining?: boolean;

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ExperimentConfig" })
  experimentConfig?: ExperimentConfig;

  @Metadata({ data: "json, name=FailureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=FinalMetricDataList", elemType: shared.MetricData })
  finalMetricDataList?: MetricData[];

  @Metadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.Channel })
  inputDataConfig?: Channel[];

  @Metadata({ data: "json, name=LabelingJobArn" })
  labelingJobArn?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=ModelArtifacts" })
  modelArtifacts: ModelArtifacts;

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig?: OutputDataConfig;

  @Metadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfig;

  @Metadata({ data: "json, name=ProfilerRuleConfigurations", elemType: shared.ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @Metadata({ data: "json, name=ProfilerRuleEvaluationStatuses", elemType: shared.ProfilerRuleEvaluationStatus })
  profilerRuleEvaluationStatuses?: ProfilerRuleEvaluationStatus[];

  @Metadata({ data: "json, name=ProfilingStatus" })
  profilingStatus?: ProfilingStatusEnum;

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @Metadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=SecondaryStatus" })
  secondaryStatus: SecondaryStatusEnum;

  @Metadata({ data: "json, name=SecondaryStatusTransitions", elemType: shared.SecondaryStatusTransition })
  secondaryStatusTransitions?: SecondaryStatusTransition[];

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=TensorBoardOutputConfig" })
  tensorBoardOutputConfig?: TensorBoardOutputConfig;

  @Metadata({ data: "json, name=TrainingEndTime" })
  trainingEndTime?: Date;

  @Metadata({ data: "json, name=TrainingJobArn" })
  trainingJobArn: string;

  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @Metadata({ data: "json, name=TrainingJobStatus" })
  trainingJobStatus: TrainingJobStatusEnum;

  @Metadata({ data: "json, name=TrainingStartTime" })
  trainingStartTime?: Date;

  @Metadata({ data: "json, name=TrainingTimeInSeconds" })
  trainingTimeInSeconds?: number;

  @Metadata({ data: "json, name=TuningJobArn" })
  tuningJobArn?: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
