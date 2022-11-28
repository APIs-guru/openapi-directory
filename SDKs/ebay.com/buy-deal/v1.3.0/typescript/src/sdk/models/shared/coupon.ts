import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Terms } from "./terms";



// Coupon
/** 
 * The details for the coupon available for the item.
**/
export class Coupon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redemptionCode" })
  redemptionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=terms" })
  terms?: Terms;
}
