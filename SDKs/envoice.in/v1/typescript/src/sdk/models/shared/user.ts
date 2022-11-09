import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExternalConnection } from "./externalconnection";
import { UserSettings } from "./usersettings";
import { SubscriptionPlan } from "./subscriptionplan";

export enum UserStatusEnum {
    Normal = "Normal"
,    Fraudlent = "Fraudlent"
,    Locked = "Locked"
}

export enum UserTypeEnum {
    Anonymous = "Anonymous"
,    Customer = "Customer"
,    SystemAdministrator = "SystemAdministrator"
,    Collaborator = "Collaborator"
}

export enum UserYearsOfExperienceEnum {
    One = "One"
,    OneToThree = "OneToThree"
,    ThreeToFive = "ThreeToFive"
,    SixPlus = "SixPlus"
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionNotificationsLastReadOn" })
  actionNotificationsLastReadOn?: Date;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=ExternalConnections", elemType: shared.ExternalConnection })
  externalConnections?: ExternalConnection[];

  @Metadata({ data: "json, name=HasBeenOnboarded" })
  hasBeenOnboarded?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=IsLocked" })
  isLocked?: boolean;

  @Metadata({ data: "json, name=IsVerified" })
  isVerified?: boolean;

  @Metadata({ data: "json, name=KnowledgeNotificationsLastReadOn" })
  knowledgeNotificationsLastReadOn?: Date;

  @Metadata({ data: "json, name=LastSeenOn" })
  lastSeenOn?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=PasswordSalt" })
  passwordSalt?: string;

  @Metadata({ data: "json, name=ReferralPath" })
  referralPath?: string;

  @Metadata({ data: "json, name=ReferredUsers" })
  referredUsers?: number;

  @Metadata({ data: "json, name=ReferrerKey" })
  referrerKey?: string;

  @Metadata({ data: "json, name=Settings" })
  settings?: UserSettings;

  @Metadata({ data: "json, name=Status" })
  status?: UserStatusEnum;

  @Metadata({ data: "json, name=SubscriptionPlan" })
  subscriptionPlan?: SubscriptionPlan;

  @Metadata({ data: "json, name=Type" })
  type?: UserTypeEnum;

  @Metadata({ data: "json, name=Username" })
  username?: string;

  @Metadata({ data: "json, name=VerifiedOn" })
  verifiedOn?: Date;

  @Metadata({ data: "json, name=YearsOfExperience" })
  yearsOfExperience?: UserYearsOfExperienceEnum;
}
