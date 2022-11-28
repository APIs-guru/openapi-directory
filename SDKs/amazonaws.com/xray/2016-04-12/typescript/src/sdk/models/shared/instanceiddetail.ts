import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceIdDetail
/** 
 * A list of EC2 instance IDs corresponding to the segments in a trace. 
**/
export class InstanceIdDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
