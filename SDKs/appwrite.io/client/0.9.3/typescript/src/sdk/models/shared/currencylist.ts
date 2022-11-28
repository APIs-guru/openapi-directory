import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Currency } from "./currency";



// CurrencyList
/** 
 * Currencies List
**/
export class CurrencyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencies", elemType: Currency })
  currencies: Currency[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
