import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn?: string;
}
