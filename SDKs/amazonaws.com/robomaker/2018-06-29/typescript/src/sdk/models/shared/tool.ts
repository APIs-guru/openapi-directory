import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExitBehaviorEnum } from "./exitbehaviorenum";



// Tool
/** 
 * Information about a tool. Tools are used in a simulation job.
**/
export class Tool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=exitBehavior" })
  exitBehavior?: ExitBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=streamOutputToCloudWatch" })
  streamOutputToCloudWatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=streamUI" })
  streamUi?: boolean;
}
