import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateInstanceResult
/** 
 * Contains the response to a <code>CreateInstance</code> request.
**/
export class CreateInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}
