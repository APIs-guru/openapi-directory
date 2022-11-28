import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Website } from "./website";
export declare enum HrisCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Trial = "trial",
    Other = "other"
}
export declare class HrisCompanyInput extends SpeakeasyBase {
    addresses?: Address[];
    companyNumber?: string;
    debtorId?: string;
    displayName?: string;
    emails?: Email[];
    legalName: string;
    phoneNumbers?: PhoneNumber[];
    status?: HrisCompanyStatusEnum;
    subdomain?: string;
    websites?: Website[];
}
export declare class HrisCompany extends SpeakeasyBase {
    addresses?: Address[];
    companyNumber?: string;
    createdAt?: Date;
    createdBy?: string;
    debtorId?: string;
    deleted?: boolean;
    displayName?: string;
    emails?: Email[];
    id?: string;
    legalName: string;
    phoneNumbers?: PhoneNumber[];
    status?: HrisCompanyStatusEnum;
    subdomain?: string;
    updatedAt?: Date;
    updatedBy?: string;
    websites?: Website[];
}
