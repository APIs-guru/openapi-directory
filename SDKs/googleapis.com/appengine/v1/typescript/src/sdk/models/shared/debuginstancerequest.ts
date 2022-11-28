import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DebugInstanceRequest
/** 
 * Request message for Instances.DebugInstance.
**/
export class DebugInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sshKey" })
  sshKey?: string;
}
