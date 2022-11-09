import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare enum CustomerSupportCustomerStatusEnum {
    Active = "active",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}
export declare class CustomerSupportCustomer extends SpeakeasyBase {
    addresses?: Address[];
    bankAccounts?: BankAccount;
    companyName?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    emails?: Email[];
    firstName?: string;
    id?: string;
    individual?: boolean;
    lastName?: string;
    notes?: string;
    phoneNumbers?: PhoneNumber[];
    status?: CustomerSupportCustomerStatusEnum;
    taxNumber?: string;
    updatedAt?: Date;
    updatedBy?: string;
}
