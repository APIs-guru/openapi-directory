import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityResponse
/** 
 * Provides information about an activity that was performed by a campaign.
**/
export class ActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=CampaignId" })
  campaignId: string;

  @Metadata({ data: "json, name=End" })
  end?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=Result" })
  result?: string;

  @Metadata({ data: "json, name=ScheduledStart" })
  scheduledStart?: string;

  @Metadata({ data: "json, name=Start" })
  start?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=SuccessfulEndpointCount" })
  successfulEndpointCount?: number;

  @Metadata({ data: "json, name=TimezonesCompletedCount" })
  timezonesCompletedCount?: number;

  @Metadata({ data: "json, name=TimezonesTotalCount" })
  timezonesTotalCount?: number;

  @Metadata({ data: "json, name=TotalEndpointCount" })
  totalEndpointCount?: number;

  @Metadata({ data: "json, name=TreatmentId" })
  treatmentId?: string;
}
