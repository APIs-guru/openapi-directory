import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";


// CampaignUpdateSummary
/** 
 * Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export class CampaignUpdateSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
