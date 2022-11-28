import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


export enum SupplierStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Archived = "archived",
    GdprErasureRequest = "gdpr-erasure-request",
    Unknown = "unknown"
}


export class Supplier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccount;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=downstream_id" })
  downstreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SupplierStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_number" })
  taxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRate;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}


export class SupplierInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: LinkedLedgerAccountInput;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=row_version" })
  rowVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SupplierStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_number" })
  taxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_rate" })
  taxRate?: LinkedTaxRateInput;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}
