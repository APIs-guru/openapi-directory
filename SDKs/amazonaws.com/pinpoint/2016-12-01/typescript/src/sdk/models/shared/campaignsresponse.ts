import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CampaignResponse } from "./campaignresponse";


// CampaignsResponse
/** 
 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
**/
export class CampaignsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.CampaignResponse })
  item: CampaignResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
