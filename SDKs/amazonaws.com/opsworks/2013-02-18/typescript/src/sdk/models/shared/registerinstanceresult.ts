import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterInstanceResult
/** 
 * Contains the response to a <code>RegisterInstanceResult</code> request.
**/
export class RegisterInstanceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
