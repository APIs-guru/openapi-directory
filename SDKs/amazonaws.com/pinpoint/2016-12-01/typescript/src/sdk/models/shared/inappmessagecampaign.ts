import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InAppMessage } from "./inappmessage";
import { InAppCampaignSchedule } from "./inappcampaignschedule";


// InAppMessageCampaign
/** 
 * Targeted in-app message campaign.
**/
export class InAppMessageCampaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=DailyCap" })
  dailyCap?: number;

  @Metadata({ data: "json, name=InAppMessage" })
  inAppMessage?: InAppMessage;

  @Metadata({ data: "json, name=Priority" })
  priority?: number;

  @Metadata({ data: "json, name=Schedule" })
  schedule?: InAppCampaignSchedule;

  @Metadata({ data: "json, name=SessionCap" })
  sessionCap?: number;

  @Metadata({ data: "json, name=TotalCap" })
  totalCap?: number;

  @Metadata({ data: "json, name=TreatmentId" })
  treatmentId?: string;
}
