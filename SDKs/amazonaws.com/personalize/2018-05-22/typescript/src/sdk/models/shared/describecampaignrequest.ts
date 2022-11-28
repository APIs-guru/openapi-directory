import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn: string;
}
