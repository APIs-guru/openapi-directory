import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RejectedLogEventsInfo
/** 
 * Represents the rejected events.
**/
export class RejectedLogEventsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiredLogEventEndIndex" })
  expiredLogEventEndIndex?: number;

  @Metadata({ data: "json, name=tooNewLogEventStartIndex" })
  tooNewLogEventStartIndex?: number;

  @Metadata({ data: "json, name=tooOldLogEventEndIndex" })
  tooOldLogEventEndIndex?: number;
}
