import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";



export class ApplicantSocialLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum ApplicantWebsitesTypeEnum {
    Primary = "primary",
    Secondary = "secondary",
    Work = "work",
    Personal = "personal",
    Other = "other"
}


export class ApplicantWebsites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ApplicantWebsitesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class ApplicantInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=anonymized" })
  anonymized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=confidential" })
  confidential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=coordinator_id" })
  coordinatorId?: string;

  @SpeakeasyMetadata({ data: "json, name=cover_letter" })
  coverLetter?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string[];

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=position_id" })
  positionId?: string;

  @SpeakeasyMetadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recruiter_id" })
  recruiterId?: string;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: ApplicantSocialLinks })
  socialLinks?: ApplicantSocialLinks[];

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources?: string[];

  @SpeakeasyMetadata({ data: "json, name=stage_id" })
  stageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: ApplicantWebsites })
  websites?: ApplicantWebsites[];
}


export class Applicant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=anonymized" })
  anonymized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=applications" })
  applications?: string[];

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=confidential" })
  confidential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=coordinator_id" })
  coordinatorId?: string;

  @SpeakeasyMetadata({ data: "json, name=cover_letter" })
  coverLetter?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=cv_url" })
  cvUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=deleted_by" })
  deletedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=followers" })
  followers?: string[];

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initials" })
  initials?: string;

  @SpeakeasyMetadata({ data: "json, name=job_url" })
  jobUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=last_interaction_at" })
  lastInteractionAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=middle_name" })
  middleName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=position_id" })
  positionId?: string;

  @SpeakeasyMetadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recruiter_id" })
  recruiterId?: string;

  @SpeakeasyMetadata({ data: "json, name=rejected_at" })
  rejectedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=social_links", elemType: ApplicantSocialLinks })
  socialLinks?: ApplicantSocialLinks[];

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=sourced_by" })
  sourcedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=sources" })
  sources?: string[];

  @SpeakeasyMetadata({ data: "json, name=stage_id" })
  stageId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: ApplicantWebsites })
  websites?: ApplicantWebsites[];
}
