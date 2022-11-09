import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DebugInstanceRequest
/** 
 * Request message for Instances.DebugInstance.
**/
export class DebugInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sshKey" })
  sshKey?: string;
}
