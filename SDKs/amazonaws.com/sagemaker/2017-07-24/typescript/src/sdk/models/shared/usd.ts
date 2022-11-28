import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Usd
/** 
 * Represents an amount of money in United States dollars.
**/
export class Usd extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Cents" })
  cents?: number;

  @SpeakeasyMetadata({ data: "json, name=Dollars" })
  dollars?: number;

  @SpeakeasyMetadata({ data: "json, name=TenthFractionsOfACent" })
  tenthFractionsOfACent?: number;
}
