import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordMarkerFailedCauseEnum } from "./recordmarkerfailedcauseenum";


// RecordMarkerFailedEventAttributes
/** 
 * Provides the details of the <code>RecordMarkerFailed</code> event.
**/
export class RecordMarkerFailedEventAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause: RecordMarkerFailedCauseEnum;

  @Metadata({ data: "json, name=decisionTaskCompletedEventId" })
  decisionTaskCompletedEventId: number;

  @Metadata({ data: "json, name=markerName" })
  markerName: string;
}
