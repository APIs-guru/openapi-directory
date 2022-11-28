import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";


export enum CompanyInfoTheStartMonthOfFiscalYearEnum {
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

export enum CompanyInfoCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class CompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=automated_sales_tax" })
  automatedSalesTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=company_start_date" })
  companyStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=default_sales_tax" })
  defaultSalesTax?: LinkedTaxRate;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=fiscal_year_start_month" })
  fiscalYearStartMonth?: CompanyInfoTheStartMonthOfFiscalYearEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_name" })
  legalName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=sales_tax_enabled" })
  salesTaxEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sales_tax_number" })
  salesTaxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CompanyInfoCompanyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
