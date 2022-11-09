import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Channel } from "./channel";
import { OutputDataConfig } from "./outputdataconfig";
import { ResourceConfig } from "./resourceconfig";
import { StoppingCondition } from "./stoppingcondition";
import { TrainingInputModeEnum } from "./traininginputmodeenum";


// TrainingJobDefinition
/** 
 * Defines the input needed to run a training job using the algorithm.
**/
export class TrainingJobDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @Metadata({ data: "json, name=InputDataConfig", elemType: shared.Channel })
  inputDataConfig: Channel[];

  @Metadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @Metadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @Metadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @Metadata({ data: "json, name=TrainingInputMode" })
  trainingInputMode: TrainingInputModeEnum;
}
