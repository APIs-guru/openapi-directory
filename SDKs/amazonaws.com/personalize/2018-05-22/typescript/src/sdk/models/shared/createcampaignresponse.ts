import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn?: string;
}
