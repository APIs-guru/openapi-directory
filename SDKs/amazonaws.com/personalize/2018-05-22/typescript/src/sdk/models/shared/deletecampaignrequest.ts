import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn: string;
}
