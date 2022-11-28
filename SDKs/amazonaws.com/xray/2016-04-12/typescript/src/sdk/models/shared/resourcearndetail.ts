import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceArnDetail
/** 
 * A list of resources ARNs corresponding to the segments in a trace.
**/
export class ResourceArnDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;
}
