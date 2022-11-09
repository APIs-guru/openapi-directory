import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Engagement
/** 
 * Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
**/
export class Engagement extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=EngagementArn" })
  engagementArn: string;

  @Metadata({ data: "json, name=IncidentId" })
  incidentId?: string;

  @Metadata({ data: "json, name=Sender" })
  sender: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=StopTime" })
  stopTime?: Date;
}
