import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { StoppingCondition } from "./stoppingcondition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";
/**
 * Defines the input needed to run a training job using the algorithm.
**/
export declare class TrainingJobDefinition extends SpeakeasyBase {
    hyperParameters?: Map<string, string>;
    inputDataConfig: Channel[];
    outputDataConfig: OutputDataConfig;
    resourceConfig: ResourceConfig;
    stoppingCondition: StoppingCondition;
    trainingInputMode: TrainingInputModeEnum;
}
