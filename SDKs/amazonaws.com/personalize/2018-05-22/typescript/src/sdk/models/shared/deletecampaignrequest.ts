import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaignArn" })
  campaignArn: string;
}
