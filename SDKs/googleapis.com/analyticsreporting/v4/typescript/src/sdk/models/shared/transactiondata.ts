import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransactionData
/** 
 * Represents details collected when the visitor performs a transaction on the page.
**/
export class TransactionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @Metadata({ data: "json, name=transactionRevenue" })
  transactionRevenue?: number;

  @Metadata({ data: "json, name=transactionShipping" })
  transactionShipping?: number;

  @Metadata({ data: "json, name=transactionTax" })
  transactionTax?: number;
}
