import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare class UserInput extends SpeakeasyBase {
    addresses?: Address[];
    companyName?: string;
    department?: string;
    description?: string;
    division?: string;
    emails: Email[];
    employeeNumber?: string;
    firstName?: string;
    image?: string;
    language?: string;
    lastName?: string;
    parentId?: string;
    password?: string;
    phoneNumbers?: PhoneNumber[];
    status?: string;
    title?: string;
    username?: string;
}
export declare class UserOutput extends SpeakeasyBase {
    addresses?: Address[];
    companyName?: string;
    createdAt?: string;
    department?: string;
    description?: string;
    division?: string;
    emails: Email[];
    employeeNumber?: string;
    firstName?: string;
    id?: string;
    image?: string;
    language?: string;
    lastName?: string;
    parentId?: string;
    phoneNumbers?: PhoneNumber[];
    status?: string;
    title?: string;
    updatedAt?: string;
    username?: string;
}
