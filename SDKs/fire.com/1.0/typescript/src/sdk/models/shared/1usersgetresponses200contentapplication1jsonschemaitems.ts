import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum {
    Android = "Android"
,    Ios = "IOS"
,    Other = "OTHER"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum {
    IPhone = "iPhone"
,    Android = "Android"
,    Other = "Other"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum {
    Live = "LIVE"
,    Closed = "CLOSED"
,    Locked = "LOCKED"
,    SmsSent = "SMS_SENT"
}


export class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=OS" })
  os?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum;

  @Metadata({ data: "json, name=businessUserId" })
  businessUserId?: number;

  @Metadata({ data: "json, name=clientID" })
  clientId?: string;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum;

  @Metadata({ data: "json, name=deviceOSVersion" })
  deviceOsVersion?: string;

  @Metadata({ data: "json, name=mobileApplicationId" })
  mobileApplicationId?: number;

  @Metadata({ data: "json, name=status" })
  status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum;
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum {
    Admin = "ADMIN"
,    FullUser = "FULL_USER"
,    ReadOnly = "READ_ONLY"
,    CardOnly = "CARD_ONLY"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum {
    Live = "LIVE"
,    Closed = "CLOSED"
,    Frozen = "FROZEN"
,    InviteSent = "INVITE_SENT"
,    SmsCodeSent = "SMS_CODE_SENT"
}


export class OneusersGetResponses200ContentApplication1jsonSchemaItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=lastlogin" })
  lastlogin?: string;

  @Metadata({ data: "json, name=mobileApplicationDetails" })
  mobileApplicationDetails?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication;

  @Metadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @Metadata({ data: "json, name=role" })
  role?: OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum;

  @Metadata({ data: "json, name=status" })
  status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum;

  @Metadata({ data: "json, name=userCvl" })
  userCvl?: string;
}
