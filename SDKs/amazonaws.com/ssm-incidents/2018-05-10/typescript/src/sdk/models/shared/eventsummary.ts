import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventSummary
/** 
 * Details about a timeline event during an incident.
**/
export class EventSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=eventTime" })
  eventTime: Date;

  @Metadata({ data: "json, name=eventType" })
  eventType: string;

  @Metadata({ data: "json, name=eventUpdatedTime" })
  eventUpdatedTime: Date;

  @Metadata({ data: "json, name=incidentRecordArn" })
  incidentRecordArn: string;
}
