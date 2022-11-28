import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentResponse } from "./segmentresponse";



export class DeleteSegmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SegmentResponse" })
  segmentResponse: SegmentResponse;
}
