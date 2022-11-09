import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: AlgorithmSpecification;

  @Metadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @Metadata({ data: "json, name=DebugHookConfig" })
  debugHookConfig?: DebugHookConfig;

  @Metadata({ data: "json, name=DebugRuleConfigurations", elemType: shared.DebugRuleConfiguration })
  debugRuleConfigurations?: DebugRuleConfiguration[];

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

  @Metadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.Channel })
  inputDataConfig?: Channel[];

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfig;

  @Metadata({ data: "json, name=ProfilerRuleConfigurations", elemType: shared.ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @Metadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TensorBoardOutputConfig" })
  tensorBoardOutputConfig?: TensorBoardOutputConfig;

  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
