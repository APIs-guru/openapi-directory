import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateInstanceResult
/** 
 * Contains the response to a <code>CreateInstance</code> request.
**/
export class CreateInstanceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
