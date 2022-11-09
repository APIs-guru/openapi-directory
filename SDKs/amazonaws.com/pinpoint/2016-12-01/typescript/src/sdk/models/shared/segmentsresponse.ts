import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SegmentResponse } from "./segmentresponse";


// SegmentsResponse
/** 
 * Provides information about all the segments that are associated with an application.
**/
export class SegmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.SegmentResponse })
  item: SegmentResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
