import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn?: string;
}
