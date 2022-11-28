import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";



export class Lead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

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

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @SpeakeasyMetadata({ data: "json, name=monetary_amount" })
  monetaryAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink })
  socialLinks?: SocialLink[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}


export class LeadInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_id" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=company_name" })
  companyName: string;

  @SpeakeasyMetadata({ data: "json, name=contact_id" })
  contactId?: string;

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

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @SpeakeasyMetadata({ data: "json, name=monetary_amount" })
  monetaryAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: SocialLink })
  socialLinks?: SocialLink[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}
