import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Command } from "./command";



// DescribeCommandsResult
/** 
 * Contains the response to a <code>DescribeCommands</code> request.
**/
export class DescribeCommandsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Commands", elemType: Command })
  commands?: Command[];
}
