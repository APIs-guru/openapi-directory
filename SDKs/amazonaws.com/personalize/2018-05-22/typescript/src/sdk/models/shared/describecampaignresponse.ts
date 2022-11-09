import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Campaign } from "./campaign";


export class DescribeCampaignResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaign" })
  campaign?: Campaign;
}
