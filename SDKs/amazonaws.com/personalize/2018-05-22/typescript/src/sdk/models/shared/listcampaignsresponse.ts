import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CampaignSummary } from "./campaignsummary";


export class ListCampaignsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaigns", elemType: shared.CampaignSummary })
  campaigns?: CampaignSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
