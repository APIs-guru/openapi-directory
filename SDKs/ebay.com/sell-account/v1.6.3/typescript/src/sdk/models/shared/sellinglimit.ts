import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// SellingLimit
/** 
 * Defines the selling limit applied to an eBay seller's account.
**/
export class SellingLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
