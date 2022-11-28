import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BankAccountsProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemBankAccountDto })
  request: shared.BatchItemBankAccountDto[];
}


export class BankAccountsProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
