import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Transaction } from "./transaction";


export class GetTransactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ok" })
  ok: boolean;

  @Metadata({ data: "json, name=transactions", elemType: shared.Transaction })
  transactions: Transaction[];
}
