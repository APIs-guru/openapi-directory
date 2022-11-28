import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignsResponse } from "./campaignsresponse";



export class GetCampaignVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignsResponse" })
  campaignsResponse: CampaignsResponse;
}
