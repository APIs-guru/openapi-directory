import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUsersUserMobileApplicationOsEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}
export declare enum GetUsersUserMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}
export declare enum GetUsersUserMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}
export declare class GetUsersUserMobileApplication extends SpeakeasyBase {
    os?: GetUsersUserMobileApplicationOsEnum;
    businessUserId?: number;
    clientId?: string;
    deviceName?: GetUsersUserMobileApplicationDeviceNameEnum;
    deviceOsVersion?: string;
    mobileApplicationId?: number;
    status?: GetUsersUserMobileApplicationStatusEnum;
}
export declare enum GetUsersUserRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}
export declare enum GetUsersUserStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}
export declare class GetUsersUser extends SpeakeasyBase {
    emailAddress?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    lastlogin?: string;
    mobileApplicationDetails?: GetUsersUserMobileApplication;
    mobileNumber?: string;
    role?: GetUsersUserRoleEnum;
    status?: GetUsersUserStatusEnum;
    userCvl?: string;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: GetUsersUser[];
}
