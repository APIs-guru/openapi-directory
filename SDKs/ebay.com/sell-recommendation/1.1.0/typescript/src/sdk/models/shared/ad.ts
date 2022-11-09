import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BidPercentages } from "./bidpercentages";


// Ad
/** 
 * A complex type that contains recommendations and information on how to configure Promoted Listings ad campaigns.
**/
export class Ad extends SpeakeasyBase {
  @Metadata({ data: "json, name=bidPercentages", elemType: shared.BidPercentages })
  bidPercentages?: BidPercentages[];

  @Metadata({ data: "json, name=promoteWithAd" })
  promoteWithAd?: string;
}
