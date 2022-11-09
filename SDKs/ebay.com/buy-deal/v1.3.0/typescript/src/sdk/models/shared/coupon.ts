import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Terms } from "./terms";


// Coupon
/** 
 * The details for the coupon available for the item.
**/
export class Coupon extends SpeakeasyBase {
  @Metadata({ data: "json, name=redemptionCode" })
  redemptionCode?: string;

  @Metadata({ data: "json, name=terms" })
  terms?: Terms;
}
