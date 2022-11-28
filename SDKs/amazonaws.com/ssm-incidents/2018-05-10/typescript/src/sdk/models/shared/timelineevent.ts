import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimelineEvent
/** 
 * A significant event that happened during the incident. 
**/
export class TimelineEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventData" })
  eventData: string;

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
