import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Defines the training jobs launched by a hyperparameter tuning job.
**/
export declare class HyperParameterTrainingJobDefinition extends SpeakeasyBase {
    algorithmSpecification: HyperParameterAlgorithmSpecification;
    checkpointConfig?: CheckpointConfig;
    definitionName?: string;
    enableInterContainerTrafficEncryption?: boolean;
    enableManagedSpotTraining?: boolean;
    enableNetworkIsolation?: boolean;
    hyperParameterRanges?: ParameterRanges;
    inputDataConfig?: Channel[];
    outputDataConfig: OutputDataConfig;
    resourceConfig: ResourceConfig;
    retryStrategy?: RetryStrategy;
    roleArn: string;
    staticHyperParameters?: Map<string, string>;
    stoppingCondition: StoppingCondition;
    tuningObjective?: HyperParameterTuningJobObjective;
    vpcConfig?: VpcConfig;
}
