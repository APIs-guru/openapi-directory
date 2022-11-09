import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExitBehaviorEnum } from "./exitbehaviorenum";


// Tool
/** 
 * Information about a tool. Tools are used in a simulation job.
**/
export class Tool extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=exitBehavior" })
  exitBehavior?: ExitBehaviorEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=streamOutputToCloudWatch" })
  streamOutputToCloudWatch?: boolean;

  @Metadata({ data: "json, name=streamUI" })
  streamUi?: boolean;
}
