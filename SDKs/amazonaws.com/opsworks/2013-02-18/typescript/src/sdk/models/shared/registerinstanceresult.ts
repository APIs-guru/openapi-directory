import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterInstanceResult
/** 
 * Contains the response to a <code>RegisterInstanceResult</code> request.
**/
export class RegisterInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
