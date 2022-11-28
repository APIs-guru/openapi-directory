import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Campaign } from "./campaign";



export class DescribeCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaign" })
  campaign?: Campaign;
}
