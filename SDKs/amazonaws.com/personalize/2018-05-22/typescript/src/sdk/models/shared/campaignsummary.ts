import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignSummary
/** 
 * Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API.
**/
export class CampaignSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
