import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedTraceSegment
/** 
 * Information about a segment that failed processing.
**/
export class UnprocessedTraceSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
