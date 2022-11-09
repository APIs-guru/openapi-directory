import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Command } from "./command";


// DescribeCommandsResult
/** 
 * Contains the response to a <code>DescribeCommands</code> request.
**/
export class DescribeCommandsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Commands", elemType: shared.Command })
  commands?: Command[];
}
