import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RejectedLogEventsInfo
/** 
 * Represents the rejected events.
**/
export class RejectedLogEventsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiredLogEventEndIndex" })
  expiredLogEventEndIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=tooNewLogEventStartIndex" })
  tooNewLogEventStartIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=tooOldLogEventEndIndex" })
  tooOldLogEventEndIndex?: number;
}
