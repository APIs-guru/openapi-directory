import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";


export class CompanyCompanyRowType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class Company extends SpeakeasyBase {
  @Metadata({ data: "json, name=abn_branch" })
  abnBranch?: string;

  @Metadata({ data: "json, name=abn_or_tfn" })
  abnOrTfn?: string;

  @Metadata({ data: "json, name=acn" })
  acn?: string;

  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=annual_revenue" })
  annualRevenue?: string;

  @Metadata({ data: "json, name=bank_accounts", elemType: shared.BankAccount })
  bankAccounts?: BankAccount[];

  @Metadata({ data: "json, name=birthday" })
  birthday?: Date;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: CurrencyEnum;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField })
  customFields?: CustomField[];

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=industry" })
  industry?: string;

  @Metadata({ data: "json, name=interaction_count" })
  interactionCount?: number;

  @Metadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: Date;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=number_of_employees" })
  numberOfEmployees?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=ownership" })
  ownership?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: string;

  @Metadata({ data: "json, name=payee_number" })
  payeeNumber?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=read_only" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=row_type" })
  rowType?: CompanyCompanyRowType;

  @Metadata({ data: "json, name=sales_tax_number" })
  salesTaxNumber?: string;

  @Metadata({ data: "json, name=salutation" })
  salutation?: string;

  @Metadata({ data: "json, name=social_links", elemType: shared.SocialLink })
  socialLinks?: SocialLink[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=vat_number" })
  vatNumber?: string;

  @Metadata({ data: "json, name=websites", elemType: shared.Website })
  websites?: Website[];
}
