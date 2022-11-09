import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignResponse } from "./campaignresponse";


export class GetCampaignVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignResponse" })
  campaignResponse: CampaignResponse;
}
