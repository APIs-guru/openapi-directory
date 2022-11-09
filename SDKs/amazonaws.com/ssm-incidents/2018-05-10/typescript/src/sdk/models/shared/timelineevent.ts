import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimelineEvent
/** 
 * A significant event that happened during the incident. 
**/
export class TimelineEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventData" })
  eventData: string;

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
