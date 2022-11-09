import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignResponse } from "./campaignresponse";


export class GetCampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignResponse" })
  campaignResponse: CampaignResponse;
}
