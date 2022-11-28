import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransactionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;
}
