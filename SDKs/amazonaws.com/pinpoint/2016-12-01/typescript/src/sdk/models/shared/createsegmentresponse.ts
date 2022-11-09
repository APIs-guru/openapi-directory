import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SegmentResponse } from "./segmentresponse";


export class CreateSegmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SegmentResponse" })
  segmentResponse: SegmentResponse;
}
