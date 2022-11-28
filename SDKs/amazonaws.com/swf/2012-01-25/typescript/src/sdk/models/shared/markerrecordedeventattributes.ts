import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MarkerRecordedEventAttributes
/** 
 * Provides the details of the <code>MarkerRecorded</code> event.
**/
export class MarkerRecordedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=markerName" })
  markerName: string;
}
