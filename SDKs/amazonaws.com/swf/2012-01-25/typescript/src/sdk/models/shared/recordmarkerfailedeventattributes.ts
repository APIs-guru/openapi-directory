import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecordMarkerFailedCauseEnum } from "./recordmarkerfailedcauseenum";



// RecordMarkerFailedEventAttributes
/** 
 * Provides the details of the <code>RecordMarkerFailed</code> event.
**/
export class RecordMarkerFailedEventAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause: RecordMarkerFailedCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @SpeakeasyMetadata({ data: "json, name=markerName" })
  markerName: string;
}
