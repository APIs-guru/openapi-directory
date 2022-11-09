import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceArnDetail
/** 
 * A list of resources ARNs corresponding to the segments in a trace.
**/
export class ResourceArnDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;
}
