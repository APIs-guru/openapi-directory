import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";



export class CompanyCompanyRowType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class CompanyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abn_branch" })
  abnBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=abn_or_tfn" })
  abnOrTfn?: string;

  @SpeakeasyMetadata({ data: "json, name=acn" })
  acn?: string;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=annual_revenue" })
  annualRevenue?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_employees" })
  numberOfEmployees?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_number" })
  payeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=row_type" })
  rowType?: CompanyCompanyRowType;

  @SpeakeasyMetadata({ data: "json, name=sales_tax_number" })
  salesTaxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink })
  socialLinks?: SocialLink[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=vat_number" })
  vatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}


export class Company extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abn_branch" })
  abnBranch?: string;

  @SpeakeasyMetadata({ data: "json, name=abn_or_tfn" })
  abnOrTfn?: string;

  @SpeakeasyMetadata({ data: "json, name=acn" })
  acn?: string;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=annual_revenue" })
  annualRevenue?: string;

  @SpeakeasyMetadata({ data: "json, name=bank_accounts", elemType: BankAccount })
  bankAccounts?: BankAccount[];

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: CustomField })
  customFields?: CustomField[];

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=industry" })
  industry?: string;

  @SpeakeasyMetadata({ data: "json, name=interaction_count" })
  interactionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=number_of_employees" })
  numberOfEmployees?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: string;

  @SpeakeasyMetadata({ data: "json, name=payee_number" })
  payeeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=row_type" })
  rowType?: CompanyCompanyRowType;

  @SpeakeasyMetadata({ data: "json, name=sales_tax_number" })
  salesTaxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=salutation" })
  salutation?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink })
  socialLinks?: SocialLink[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=vat_number" })
  vatNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}
