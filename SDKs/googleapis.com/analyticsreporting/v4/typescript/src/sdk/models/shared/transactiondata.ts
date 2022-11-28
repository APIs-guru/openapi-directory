import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransactionData
/** 
 * Represents details collected when the visitor performs a transaction on the page.
**/
export class TransactionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=transactionRevenue" })
  transactionRevenue?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionShipping" })
  transactionShipping?: number;

  @SpeakeasyMetadata({ data: "json, name=transactionTax" })
  transactionTax?: number;
}
