import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityResponse
/** 
 * Provides information about an activity that was performed by a campaign.
**/
export class ActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=CampaignId" })
  campaignId: string;

  @SpeakeasyMetadata({ data: "json, name=End" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=Result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledStart" })
  scheduledStart?: string;

  @SpeakeasyMetadata({ data: "json, name=Start" })
  start?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=SuccessfulEndpointCount" })
  successfulEndpointCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TimezonesCompletedCount" })
  timezonesCompletedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TimezonesTotalCount" })
  timezonesTotalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalEndpointCount" })
  totalEndpointCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TreatmentId" })
  treatmentId?: string;
}
