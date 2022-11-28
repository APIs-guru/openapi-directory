import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecification } from "./algorithmspecification";
import { CheckpointConfig } from "./checkpointconfig";
import { DebugHookConfig } from "./debughookconfig";
import { DebugRuleConfiguration } from "./debugruleconfiguration";
import { ExperimentConfig } from "./experimentconfig";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ProfilerConfig } from "./profilerconfig";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
import { TensorBoardOutputConfig } from "./tensorboardoutputconfig";
import { VpcConfig } from "./vpcconfig";



export class CreateTrainingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: AlgorithmSpecification;

  @SpeakeasyMetadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @SpeakeasyMetadata({ data: "json, name=DebugHookConfig" })
  debugHookConfig?: DebugHookConfig;

  @SpeakeasyMetadata({ data: "json, name=DebugRuleConfigurations", elemType: DebugRuleConfiguration })
  debugRuleConfigurations?: DebugRuleConfiguration[];

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

  @SpeakeasyMetadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel })
  inputDataConfig?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfig;

  @SpeakeasyMetadata({ data: "json, name=ProfilerRuleConfigurations", elemType: ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TensorBoardOutputConfig" })
  tensorBoardOutputConfig?: TensorBoardOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
