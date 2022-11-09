import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { CustomField } from "./customfield";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { SocialLink } from "./sociallink";
import { Website } from "./website";
export declare enum ContactGenderEnum {
    Male = "male",
    Female = "female",
    Unisex = "unisex"
}
export declare enum ContactTypeEnum {
    Customer = "customer",
    Supplier = "supplier",
    Employee = "employee",
    Personal = "personal"
}
export declare class Contact extends SpeakeasyBase {
    active?: boolean;
    addresses?: Address[];
    birthday?: string;
    companyId?: string;
    companyName?: string;
    createdAt?: Date;
    currentBalance?: number;
    customFields?: CustomField[];
    department?: string;
    description?: string;
    emails?: Email[];
    fax?: string;
    firstCallAt?: Date;
    firstEmailAt?: Date;
    firstName?: string;
    gender?: ContactGenderEnum;
    id?: string;
    image?: string;
    language?: string;
    lastActivityAt?: Date;
    lastName?: string;
    leadId?: string;
    leadSource?: string;
    middleName?: string;
    name: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    photoUrl?: string;
    prefix?: string;
    socialLinks?: SocialLink[];
    status?: string;
    suffix?: string;
    tags?: string[];
    title?: string;
    type?: ContactTypeEnum;
    updatedAt?: Date;
    websites?: Website[];
}
