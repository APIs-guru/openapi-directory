import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BankAccountsPostRequest extends SpeakeasyBase {
    request: shared.BankAccountDto;
}
export declare class BankAccountsPostResponse extends SpeakeasyBase {
    bankAccountsPost200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
