import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
export declare class ApplicantSocialLinks extends SpeakeasyBase {
    id?: string;
    type?: string;
    url: string;
}
export declare enum ApplicantWebsitesTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Other = "other"
}
export declare class ApplicantWebsites extends SpeakeasyBase {
    id?: string;
    type?: ApplicantWebsitesTypeEnum;
    url: string;
}
export declare class Applicant extends SpeakeasyBase {
    addresses?: Address[];
    anonymized?: boolean;
    applications?: string[];
    archived?: boolean;
    birthday?: Date;
    confidential?: boolean;
    coordinatorId?: string;
    coverLetter?: string;
    createdAt?: Date;
    cvUrl?: string;
    deleted?: boolean;
    deletedAt?: Date;
    deletedBy?: string;
    emails?: Email[];
    firstName?: string;
    followers?: string[];
    headline?: string;
    id?: string;
    initials?: string;
    jobUrl?: string;
    lastInteractionAt?: Date;
    lastName?: string;
    middleName?: string;
    name?: string;
    ownerId?: string;
    phoneNumbers?: PhoneNumber[];
    photoUrl?: string;
    positionId?: string;
    recordUrl?: string;
    recruiterId?: string;
    rejectedAt?: Date;
    socialLinks?: ApplicantSocialLinks[];
    sourceId?: string;
    sourcedBy?: string;
    sources?: string[];
    stageId?: string;
    tags?: string[];
    title?: string;
    updatedAt?: Date;
    websites?: ApplicantWebsites[];
}
