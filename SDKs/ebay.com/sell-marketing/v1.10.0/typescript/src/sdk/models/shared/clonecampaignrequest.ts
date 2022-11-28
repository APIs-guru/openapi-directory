import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FundingStrategy } from "./fundingstrategy";



// CloneCampaignRequest
/** 
 * This type defines the fields needed for a clone-campaign request.
**/
export class CloneCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignName" })
  campaignName?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=fundingStrategy" })
  fundingStrategy?: FundingStrategy;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
