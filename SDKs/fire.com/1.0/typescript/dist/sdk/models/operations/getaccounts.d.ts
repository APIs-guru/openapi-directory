import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAccountsAccountsAccountCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
export declare class GetAccountsAccountsAccountCurrency extends SpeakeasyBase {
    code?: GetAccountsAccountsAccountCurrencyCodeEnum;
    description?: string;
}
export declare enum GetAccountsAccountsAccountStatusEnum {
    Live = "LIVE",
    Migrated = "MIGRATED"
}
export declare class GetAccountsAccountsAccount extends SpeakeasyBase {
    balance?: number;
    cbic?: string;
    ccan?: string;
    ciban?: string;
    cnsc?: string;
    colour?: string;
    currency?: GetAccountsAccountsAccountCurrency;
    defaultAccount?: boolean;
    directDebitsAllowed?: boolean;
    ican?: number;
    name?: string;
    status?: GetAccountsAccountsAccountStatusEnum;
}
export declare class GetAccountsAccounts extends SpeakeasyBase {
    accounts?: GetAccountsAccountsAccount[];
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    accounts?: GetAccountsAccounts;
    contentType: string;
    statusCode: number;
}
