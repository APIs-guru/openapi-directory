import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalConnection } from "./externalconnection";
import { UserSettings } from "./usersettings";
import { SubscriptionPlan } from "./subscriptionplan";
export declare enum UserStatusEnum {
    Normal = "Normal",
    Fraudlent = "Fraudlent",
    Locked = "Locked"
}
export declare enum UserTypeEnum {
    Anonymous = "Anonymous",
    Customer = "Customer",
    SystemAdministrator = "SystemAdministrator",
    Collaborator = "Collaborator"
}
export declare enum UserYearsOfExperienceEnum {
    One = "One",
    OneToThree = "OneToThree",
    ThreeToFive = "ThreeToFive",
    SixPlus = "SixPlus"
}
export declare class User extends SpeakeasyBase {
    actionNotificationsLastReadOn?: Date;
    email?: string;
    externalConnections?: ExternalConnection[];
    hasBeenOnboarded?: boolean;
    id?: number;
    isLocked?: boolean;
    isVerified?: boolean;
    knowledgeNotificationsLastReadOn?: Date;
    lastSeenOn?: Date;
    name?: string;
    password?: string;
    passwordSalt?: string;
    referralPath?: string;
    referredUsers?: number;
    referrerKey?: string;
    settings?: UserSettings;
    status?: UserStatusEnum;
    subscriptionPlan?: SubscriptionPlan;
    type?: UserTypeEnum;
    username?: string;
    verifiedOn?: Date;
    yearsOfExperience?: UserYearsOfExperienceEnum;
}
