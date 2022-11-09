import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Currency } from "./currency";


// CurrencyList
/** 
 * Currencies List
**/
export class CurrencyList extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencies", elemType: shared.Currency })
  currencies: Currency[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
