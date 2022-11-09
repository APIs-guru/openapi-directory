import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransactionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
