import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignSummary
/** 
 * Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export class CampaignSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn?: string;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
