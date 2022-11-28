import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";



export class GetTransactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok: boolean;

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: Transaction })
  transactions: Transaction[];
}
