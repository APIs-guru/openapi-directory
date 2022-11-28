import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Website } from "./website";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
export declare enum SupplierStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}
export declare class Supplier extends SpeakeasyBase {
    account?: LinkedLedgerAccount;
    addresses?: Address[];
    bankAccounts?: BankAccount[];
    companyName?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    displayName?: string;
    downstreamId?: string;
    emails?: Email[];
    firstName?: string;
    id?: string;
    lastName?: string;
    middleName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    rowVersion?: string;
    status?: SupplierStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRate;
    title?: string;
    updatedAt?: Date;
    updatedBy?: string;
    websites?: Website[];
}
export declare class SupplierInput extends SpeakeasyBase {
    account?: LinkedLedgerAccountInput;
    addresses?: Address[];
    bankAccounts?: BankAccount[];
    companyName?: string;
    currency?: CurrencyEnum;
    displayName?: string;
    emails?: Email[];
    firstName?: string;
    lastName?: string;
    middleName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    rowVersion?: string;
    status?: SupplierStatusEnum;
    suffix?: string;
    taxNumber?: string;
    taxRate?: LinkedTaxRateInput;
    title?: string;
    websites?: Website[];
}
