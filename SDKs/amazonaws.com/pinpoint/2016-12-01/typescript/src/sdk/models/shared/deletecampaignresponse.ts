import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignResponse } from "./campaignresponse";



export class DeleteCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignResponse" })
  campaignResponse: CampaignResponse;
}
