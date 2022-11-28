import { SpeakeasyBase } from "../../../internal/utils";
export declare class BankAccountsDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class BankAccountsDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class BankAccountsDeleteRequest extends SpeakeasyBase {
    pathParams: BankAccountsDeletePathParams;
    queryParams: BankAccountsDeleteQueryParams;
}
export declare class BankAccountsDeleteResponse extends SpeakeasyBase {
    bankAccountsDelete200ApplicationJsonObject?: Map<string, any>;
    contentType: string;
    statusCode: number;
}
