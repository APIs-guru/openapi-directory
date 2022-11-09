import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";
export declare enum BankAccountAccountTypeEnum {
    BankAccount = "bank_account",
    CreditCard = "credit_card",
    Other = "other"
}
export declare class BankAccount extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    accountType?: BankAccountAccountTypeEnum;
    bankCode?: string;
    bic?: string;
    branchIdentifier?: string;
    bsbNumber?: string;
    currency?: CurrencyEnum;
    iban?: string;
}
