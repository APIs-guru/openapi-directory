import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignsResponse } from "./campaignsresponse";



export class GetCampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CampaignsResponse" })
  campaignsResponse: CampaignsResponse;
}
