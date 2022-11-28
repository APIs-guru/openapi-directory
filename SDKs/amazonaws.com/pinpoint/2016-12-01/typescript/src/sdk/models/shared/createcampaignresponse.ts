import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignResponse } from "./campaignresponse";



export class CreateCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignResponse" })
  campaignResponse: CampaignResponse;
}
