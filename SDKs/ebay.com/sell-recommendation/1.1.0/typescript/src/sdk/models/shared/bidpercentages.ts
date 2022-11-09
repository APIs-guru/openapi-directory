import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BidPercentages
/** 
 * A complex type that returns data related to Promoted Listings bid percentages.
**/
export class BidPercentages extends SpeakeasyBase {
  @Metadata({ data: "json, name=basis" })
  basis?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
