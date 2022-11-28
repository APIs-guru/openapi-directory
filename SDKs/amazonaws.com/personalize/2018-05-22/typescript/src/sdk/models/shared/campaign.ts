import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
import { CampaignUpdateSummary } from "./campaignupdatesummary";



// Campaign
/** 
 * Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.
**/
export class Campaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=latestCampaignUpdate" })
  latestCampaignUpdate?: CampaignUpdateSummary;

  @SpeakeasyMetadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
