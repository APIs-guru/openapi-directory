import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { Website } from "./website";
import { LinkedTaxRate } from "./linkedtaxrate";
export declare enum AccountingCustomerStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}
export declare class AccountingCustomerInput extends SpeakeasyBase {
    addresses?: Address[];
    bankAccounts?: BankAccount[];
    companyName?: string;
    currency?: CurrencyEnum;
    displayId?: string;
    displayName?: string;
    emails?: Email[];
    firstName?: string;
    individual?: boolean;
    lastName?: string;
    middleName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    rowVersion?: string;
    status?: AccountingCustomerStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRateInput;
    title?: string;
    websites?: Website[];
}
export declare class AccountingCustomer extends SpeakeasyBase {
    addresses?: Address[];
    bankAccounts?: BankAccount[];
    companyName?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    displayId?: string;
    displayName?: string;
    emails?: Email[];
    firstName?: string;
    id?: string;
    individual?: boolean;
    lastName?: string;
    middleName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    rowVersion?: string;
    status?: AccountingCustomerStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRate;
    title?: string;
    updatedAt?: Date;
    updatedBy?: string;
    websites?: Website[];
}
