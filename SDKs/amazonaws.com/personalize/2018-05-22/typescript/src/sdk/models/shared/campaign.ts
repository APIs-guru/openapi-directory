import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignConfig } from "./campaignconfig";
import { CampaignUpdateSummary } from "./campaignupdatesummary";


// Campaign
/** 
 * Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
**/
export class Campaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn?: string;

  @Metadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=latestCampaignUpdate" })
  latestCampaignUpdate?: CampaignUpdateSummary;

  @Metadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
