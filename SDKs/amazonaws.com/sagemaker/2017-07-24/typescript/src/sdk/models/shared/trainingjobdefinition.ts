import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=HyperParameters" })
  hyperParameters?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=InputDataConfig", elemType: Channel })
  inputDataConfig: Channel[];

  @SpeakeasyMetadata({ data: "json, name=OutputDataConfig" })
  outputDataConfig: OutputDataConfig;

  @SpeakeasyMetadata({ data: "json, name=ResourceConfig" })
  resourceConfig: ResourceConfig;

  @SpeakeasyMetadata({ data: "json, name=StoppingCondition" })
  stoppingCondition: StoppingCondition;

  @SpeakeasyMetadata({ data: "json, name=TrainingInputMode" })
  trainingInputMode: TrainingInputModeEnum;
}
