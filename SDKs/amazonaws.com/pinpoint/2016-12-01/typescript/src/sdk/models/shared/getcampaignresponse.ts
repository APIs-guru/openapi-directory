import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignResponse } from "./campaignresponse";



export class GetCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignResponse" })
  campaignResponse: CampaignResponse;
}
