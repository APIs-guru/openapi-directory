import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Usd
/** 
 * Represents an amount of money in United States dollars.
**/
export class Usd extends SpeakeasyBase {
  @Metadata({ data: "json, name=Cents" })
  cents?: number;

  @Metadata({ data: "json, name=Dollars" })
  dollars?: number;

  @Metadata({ data: "json, name=TenthFractionsOfACent" })
  tenthFractionsOfACent?: number;
}
