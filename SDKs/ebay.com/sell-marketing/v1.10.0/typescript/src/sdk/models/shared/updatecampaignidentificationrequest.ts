import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateCampaignIdentificationRequest
/** 
 * This type specifies the updated name, and start and end dates for an update-campaign request.
**/
export class UpdateCampaignIdentificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
