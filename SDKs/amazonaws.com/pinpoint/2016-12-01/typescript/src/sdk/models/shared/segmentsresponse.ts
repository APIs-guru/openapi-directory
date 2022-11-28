import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentResponse } from "./segmentresponse";



// SegmentsResponse
/** 
 * Provides information about all the segments that are associated with an application.
**/
export class SegmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: SegmentResponse })
  item: SegmentResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
