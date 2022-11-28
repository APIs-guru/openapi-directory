import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BidPercentages
/** 
 * A complex type that returns data related to Promoted Listings bid percentages.
**/
export class BidPercentages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basis" })
  basis?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
