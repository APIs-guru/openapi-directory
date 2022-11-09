import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MarkerRecordedEventAttributes
/** 
 * Provides the details of the <code>MarkerRecorded</code> event.
**/
export class MarkerRecordedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=markerName" })
  markerName: string;
}
