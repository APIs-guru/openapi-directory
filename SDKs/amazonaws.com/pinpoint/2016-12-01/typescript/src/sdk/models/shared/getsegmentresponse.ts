import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentResponse } from "./segmentresponse";


export class GetSegmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SegmentResponse" })
  segmentResponse: SegmentResponse;
}
