import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Engagement
/** 
 * Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
**/
export class Engagement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @SpeakeasyMetadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @SpeakeasyMetadata({ data: "json, name=Sender" })
  sender: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StopTime" })
  stopTime?: Date;
}
