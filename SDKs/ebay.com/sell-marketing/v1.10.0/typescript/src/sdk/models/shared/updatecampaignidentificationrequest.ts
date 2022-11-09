import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateCampaignIdentificationRequest
/** 
 * This type specifies the updated name, and start and end dates for an update-campaign request.
**/
export class UpdateCampaignIdentificationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
