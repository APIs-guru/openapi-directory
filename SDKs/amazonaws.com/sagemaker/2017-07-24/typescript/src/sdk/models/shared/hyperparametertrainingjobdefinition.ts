import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AlgorithmSpecification" })
  algorithmSpecification: HyperParameterAlgorithmSpecification;

  @SpeakeasyMetadata({ data: "json, name=CheckpointConfig" })
  checkpointConfig?: CheckpointConfig;

  @SpeakeasyMetadata({ data: "json, name=DefinitionName" })
  definitionName?: string;

  @SpeakeasyMetadata({ data: "json, name=EnableInterContainerTrafficEncryption" })
  enableInterContainerTrafficEncryption?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableManagedSpotTraining" })
  enableManagedSpotTraining?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableNetworkIsolation" })
  enableNetworkIsolation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HyperParameterRanges" })
  hyperParameterRanges?: ParameterRanges;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel })
  inputDataConfig?: Channel[];

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=RetryStrategy" })
  retryStrategy?: RetryStrategy;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=StaticHyperParameters" })
  staticHyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=TuningObjective" })
  tuningObjective?: HyperParameterTuningJobObjective;

  @SpeakeasyMetadata({ data: "json, name=VpcConfig" })
  vpcConfig?: VpcConfig;
}
