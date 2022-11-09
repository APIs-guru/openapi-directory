import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare class User extends SpeakeasyBase {
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
    password?: string;
    phoneNumbers?: PhoneNumber[];
    status?: string;
    title?: string;
    updatedAt?: string;
    username?: string;
}
