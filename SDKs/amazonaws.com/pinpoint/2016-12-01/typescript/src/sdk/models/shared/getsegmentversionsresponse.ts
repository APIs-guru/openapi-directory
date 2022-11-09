import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentsResponse } from "./segmentsresponse";


export class GetSegmentVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SegmentsResponse" })
  segmentsResponse: SegmentsResponse;
}
