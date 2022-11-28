import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BidPercentages } from "./bidpercentages";



// Ad
/** 
 * A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
**/
export class Ad extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bidPercentages", elemType: BidPercentages })
  bidPercentages?: BidPercentages[];

  @SpeakeasyMetadata({ data: "json, name=promoteWithAd" })
  promoteWithAd?: string;
}
