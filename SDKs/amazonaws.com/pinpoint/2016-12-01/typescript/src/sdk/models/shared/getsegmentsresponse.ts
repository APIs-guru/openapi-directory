import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SegmentsResponse } from "./segmentsresponse";



export class GetSegmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SegmentsResponse" })
  segmentsResponse: SegmentsResponse;
}
