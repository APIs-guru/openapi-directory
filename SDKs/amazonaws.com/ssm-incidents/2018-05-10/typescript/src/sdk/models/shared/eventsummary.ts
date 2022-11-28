import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventSummary
/** 
 * Details about a timeline event during an incident.
**/
export class EventSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime: Date;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=eventUpdatedTime" })
  eventUpdatedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
