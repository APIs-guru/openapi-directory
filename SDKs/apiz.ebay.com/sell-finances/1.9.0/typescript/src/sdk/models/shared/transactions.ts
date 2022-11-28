import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";



// Transactions
/** 
 * This is the base response type of the getTransactions method. The getTransactions response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.
**/
export class Transactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=prev" })
  prev?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: Transaction })
  transactions?: Transaction[];
}
