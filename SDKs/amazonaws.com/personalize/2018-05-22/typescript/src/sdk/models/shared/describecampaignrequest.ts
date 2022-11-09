import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn: string;
}
