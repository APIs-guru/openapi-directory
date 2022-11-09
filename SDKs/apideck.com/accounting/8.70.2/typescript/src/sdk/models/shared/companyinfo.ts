import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedTaxRate } from "./linkedtaxrate";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";

export enum CompanyInfoTheStartMonthOfFiscalYearEnum {
    January = "January"
,    February = "February"
,    March = "March"
,    April = "April"
,    May = "May"
,    June = "June"
,    July = "July"
,    August = "August"
,    September = "September"
,    October = "October"
,    November = "November"
,    December = "December"
}

export enum CompanyInfoCompanyStatusEnum {
    Active = "active"
,    Inactive = "inactive"
}


export class CompanyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=automated_sales_tax" })
  automatedSalesTax?: boolean;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=company_start_date" })
  companyStartDate?: Date;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=default_sales_tax" })
  defaultSalesTax?: LinkedTaxRate;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=fiscal_year_start_month" })
  fiscalYearStartMonth?: CompanyInfoTheStartMonthOfFiscalYearEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=legal_name" })
  legalName?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @Metadata({ data: "json, name=sales_tax_enabled" })
  salesTaxEnabled?: boolean;

  @Metadata({ data: "json, name=sales_tax_number" })
  salesTaxNumber?: string;

  @Metadata({ data: "json, name=status" })
  status?: CompanyInfoCompanyStatusEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
