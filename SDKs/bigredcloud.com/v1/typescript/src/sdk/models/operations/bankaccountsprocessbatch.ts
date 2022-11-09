import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankAccountsProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemBankAccountDto })
  request: shared.BatchItemBankAccountDto[];
}


export class BankAccountsProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  bankAccountsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
