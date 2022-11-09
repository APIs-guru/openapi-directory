import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UnprocessedTraceSegment } from "./unprocessedtracesegment";


export class PutTraceSegmentsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=UnprocessedTraceSegments", elemType: shared.UnprocessedTraceSegment })
  unprocessedTraceSegments?: UnprocessedTraceSegment[];
}
