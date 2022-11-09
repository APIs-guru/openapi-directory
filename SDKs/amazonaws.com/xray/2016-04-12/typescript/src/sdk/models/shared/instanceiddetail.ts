import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceIdDetail
/** 
 * A list of EC2 instance IDs corresponding to the segments in a trace. 
**/
export class InstanceIdDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;
}
