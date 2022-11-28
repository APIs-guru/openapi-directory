import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn?: string;
}
