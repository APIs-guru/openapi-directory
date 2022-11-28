import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExternalConnection } from "./externalconnection";
import { UserSettings } from "./usersettings";
import { SubscriptionPlan } from "./subscriptionplan";


export enum UserStatusEnum {
    Normal = "Normal",
    Fraudlent = "Fraudlent",
    Locked = "Locked"
}

export enum UserTypeEnum {
    Anonymous = "Anonymous",
    Customer = "Customer",
    SystemAdministrator = "SystemAdministrator",
    Collaborator = "Collaborator"
}

export enum UserYearsOfExperienceEnum {
    One = "One",
    OneToThree = "OneToThree",
    ThreeToFive = "ThreeToFive",
    SixPlus = "SixPlus"
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionNotificationsLastReadOn" })
  actionNotificationsLastReadOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalConnections", elemType: ExternalConnection })
  externalConnections?: ExternalConnection[];

  @SpeakeasyMetadata({ data: "json, name=HasBeenOnboarded" })
  hasBeenOnboarded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=IsLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsVerified" })
  isVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KnowledgeNotificationsLastReadOn" })
  knowledgeNotificationsLastReadOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastSeenOn" })
  lastSeenOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=PasswordSalt" })
  passwordSalt?: string;

  @SpeakeasyMetadata({ data: "json, name=ReferralPath" })
  referralPath?: string;

  @SpeakeasyMetadata({ data: "json, name=ReferredUsers" })
  referredUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=ReferrerKey" })
  referrerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Settings" })
  settings?: UserSettings;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UserStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionPlan" })
  subscriptionPlan?: SubscriptionPlan;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: UserTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=VerifiedOn" })
  verifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=YearsOfExperience" })
  yearsOfExperience?: UserYearsOfExperienceEnum;
}
