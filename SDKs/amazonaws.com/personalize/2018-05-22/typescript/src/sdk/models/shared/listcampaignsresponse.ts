import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";



export class ListCampaignsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaigns", elemType: CampaignSummary })
  campaigns?: CampaignSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
