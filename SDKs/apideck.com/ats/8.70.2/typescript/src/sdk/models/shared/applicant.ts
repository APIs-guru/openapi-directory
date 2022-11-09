import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";


export class ApplicantSocialLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

export enum ApplicantWebsitesTypeEnum {
    Primary = "primary"
,    Secondary = "secondary"
,    Work = "work"
,    Personal = "personal"
,    Other = "other"
}


export class ApplicantWebsites extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: ApplicantWebsitesTypeEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class Applicant extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=anonymized" })
  anonymized?: boolean;

  @Metadata({ data: "json, name=applications" })
  applications?: string[];

  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=birthday" })
  birthday?: Date;

  @Metadata({ data: "json, name=confidential" })
  confidential?: boolean;

  @Metadata({ data: "json, name=coordinator_id" })
  coordinatorId?: string;

  @Metadata({ data: "json, name=cover_letter" })
  coverLetter?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=cv_url" })
  cvUrl?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=deleted_at" })
  deletedAt?: Date;

  @Metadata({ data: "json, name=deleted_by" })
  deletedBy?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=followers" })
  followers?: string[];

  @Metadata({ data: "json, name=headline" })
  headline?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initials" })
  initials?: string;

  @Metadata({ data: "json, name=job_url" })
  jobUrl?: string;

  @Metadata({ data: "json, name=last_interaction_at" })
  lastInteractionAt?: Date;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=middle_name" })
  middleName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner_id" })
  ownerId?: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=photo_url" })
  photoUrl?: string;

  @Metadata({ data: "json, name=position_id" })
  positionId?: string;

  @Metadata({ data: "json, name=record_url" })
  recordUrl?: string;

  @Metadata({ data: "json, name=recruiter_id" })
  recruiterId?: string;

  @Metadata({ data: "json, name=rejected_at" })
  rejectedAt?: Date;

  @Metadata({ data: "json, name=social_links", elemType: shared.ApplicantSocialLinks })
  socialLinks?: ApplicantSocialLinks[];

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=sourced_by" })
  sourcedBy?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: string[];

  @Metadata({ data: "json, name=stage_id" })
  stageId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=websites", elemType: shared.ApplicantWebsites })
  websites?: ApplicantWebsites[];
}
