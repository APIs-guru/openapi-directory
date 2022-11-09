import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UnprocessedTraceSegment
/** 
 * Information about a segment that failed processing.
**/
export class UnprocessedTraceSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
