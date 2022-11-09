import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HyperParameterAlgorithmSpecification } from "./hyperparameteralgorithmspecification";
import { CheckpointConfig } from "./checkpointconfig";
import { ParameterRanges } from "./parameterranges";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { RetryStrategy } from "./retrystrategy";
import { StoppingCondition } from "./stoppingcondition";
import { HyperParameterTuningJobObjective } from "./hyperparametertuningjobobjective";
import { VpcConfig } from "./vpcconfig";


// HyperParameterTrainingJobDefinition
/** 
 * Defines the training jobs launched by a hyperparameter tuning job.
**/
export class HyperParameterTrainingJobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: HyperParameterAlgorithmSpecification;

  @Metadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @Metadata({ data: "json, name=DefinitionName" })
  definitionName?: string;

  @Metadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @Metadata({ data: "json, name=EnableManagedSpotTraining" })
  enableManagedSpotTraining?: boolean;

  @Metadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @Metadata({ data: "json, name=HyperParameterRanges" })
  hyperParameterRanges?: ParameterRanges;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.Channel })
  inputDataConfig?: Channel[];

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @Metadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=StaticHyperParameters" })
  staticHyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=TuningObjective" })
  tuningObjective?: HyperParameterTuningJobObjective;

  @Metadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
