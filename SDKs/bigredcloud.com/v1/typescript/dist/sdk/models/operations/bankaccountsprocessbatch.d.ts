import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankAccountsProcessBatchRequest extends SpeakeasyBase {
    request: shared.BatchItemBankAccountDto[];
}
export declare class BankAccountsProcessBatchResponse extends SpeakeasyBase {
    bankAccountsProcessBatch200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
