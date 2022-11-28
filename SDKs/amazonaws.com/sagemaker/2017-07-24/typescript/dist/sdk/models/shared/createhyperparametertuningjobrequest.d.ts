import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { Tag } from "./tag";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
export declare class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
    hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    hyperParameterTuningJobName: string;
    tags?: Tag[];
    trainingJobDefinition?: HyperParameterTrainingJobDefinition;
    trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];
    warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
