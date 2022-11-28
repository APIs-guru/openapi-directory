import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}
export declare enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}
export declare enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}
export declare class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication extends SpeakeasyBase {
    os?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum;
    businessUserId?: number;
    clientId?: string;
    deviceName?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum;
    deviceOsVersion?: string;
    mobileApplicationId?: number;
    status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum;
}
export declare enum OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}
export declare enum OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}
export declare class OneusersGetResponses200ContentApplication1jsonSchemaItems extends SpeakeasyBase {
    emailAddress?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    lastlogin?: string;
    mobileApplicationDetails?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication;
    mobileNumber?: string;
    role?: OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum;
    status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum;
    userCvl?: string;
}
