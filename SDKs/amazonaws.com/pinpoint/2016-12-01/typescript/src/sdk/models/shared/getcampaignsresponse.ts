import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CampaignsResponse } from "./campaignsresponse";


export class GetCampaignsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CampaignsResponse" })
  campaignsResponse: CampaignsResponse;
}
