import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedTraceSegment } from "./unprocessedtracesegment";



export class PutTraceSegmentsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=UnprocessedTraceSegments", elemType: UnprocessedTraceSegment })
  unprocessedTraceSegments?: UnprocessedTraceSegment[];
}
