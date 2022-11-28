import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare enum CompanyInfoTheStartMonthOfFiscalYearEnum {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}
export declare enum CompanyInfoCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class CompanyInfo extends SpeakeasyBase {
    addresses?: Address[];
    automatedSalesTax?: boolean;
    companyName?: string;
    companyStartDate?: Date;
    country?: string;
    createdAt?: Date;
    createdBy?: string;
    currency?: CurrencyEnum;
    defaultSalesTax?: LinkedTaxRate;
    emails?: Email[];
    fiscalYearStartMonth?: CompanyInfoTheStartMonthOfFiscalYearEnum;
    id?: string;
    language?: string;
    legalName?: string;
    phoneNumbers?: PhoneNumber[];
    rowVersion?: string;
    salesTaxEnabled?: boolean;
    salesTaxNumber?: string;
    status?: CompanyInfoCompanyStatusEnum;
    updatedAt?: Date;
    updatedBy?: string;
}
