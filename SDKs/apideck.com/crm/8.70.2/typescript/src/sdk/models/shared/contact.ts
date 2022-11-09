import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";

export enum ContactGenderEnum {
    Male = "male"
,    Female = "female"
,    Unisex = "unisex"
}

export enum ContactTypeEnum {
    Customer = "customer"
,    Supplier = "supplier"
,    Employee = "employee"
,    Personal = "personal"
}


export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=birthday" })
  birthday?: string;

  @Metadata({ data: "json, name=company_id" })
  companyId?: string;

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=current_balance" })
  currentBalance?: number;

  @Metadata({ data: "json, name=custom_fields", elemType: shared.CustomField })
  customFields?: CustomField[];

  @Metadata({ data: "json, name=department" })
  department?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=fax" })
  fax?: string;

  @Metadata({ data: "json, name=first_call_at" })
  firstCallAt?: Date;

  @Metadata({ data: "json, name=first_email_at" })
  firstEmailAt?: Date;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: ContactGenderEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=last_activity_at" })
  lastActivityAt?: Date;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=lead_id" })
  leadId?: string;

  @Metadata({ data: "json, name=lead_source" })
  leadSource?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=social_links", elemType: shared.SocialLink })
  socialLinks?: SocialLink[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: ContactTypeEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=websites", elemType: shared.Website })
  websites?: Website[];
}
