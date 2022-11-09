import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// SellingLimit
/** 
 * Defines the selling limit applied to an eBay seller's account.
**/
export class SellingLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Amount;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
