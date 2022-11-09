import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";

export enum CustomerSupportCustomerStatusEnum {
    Active = "active"
,    Archived = "archived"
,    GdprErasureRequest = "gdpr-erasure-request"
,    Unknown = "unknown"
}


export class CustomerSupportCustomer extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=bank_accounts" })
  bankAccounts?: BankAccount;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=individual" })
  individual?: boolean;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=status" })
  status?: CustomerSupportCustomerStatusEnum;

  @Metadata({ data: "json, name=tax_number" })
  taxNumber?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;
}
