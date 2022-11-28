import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InAppMessage } from "./inappmessage";
import { InAppCampaignSchedule } from "./inappcampaignschedule";



// InAppMessageCampaign
/** 
 * Targeted in-app message campaign.
**/
export class InAppMessageCampaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=DailyCap" })
  dailyCap?: number;

  @SpeakeasyMetadata({ data: "json, name=InAppMessage" })
  inAppMessage?: InAppMessage;

  @SpeakeasyMetadata({ data: "json, name=Priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: InAppCampaignSchedule;

  @SpeakeasyMetadata({ data: "json, name=SessionCap" })
  sessionCap?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalCap" })
  totalCap?: number;

  @SpeakeasyMetadata({ data: "json, name=TreatmentId" })
  treatmentId?: string;
}
