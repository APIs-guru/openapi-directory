import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";



// CampaignUpdateSummary
/** 
 * Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export class CampaignUpdateSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTps?: number;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
