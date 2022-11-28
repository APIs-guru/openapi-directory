import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}


export class OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OS" })
  os?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationOsEnum;

  @SpeakeasyMetadata({ data: "json, name=businessUserId" })
  businessUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=clientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationDeviceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceOSVersion" })
  deviceOsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApplicationId" })
  mobileApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplicationStatusEnum;
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}

export enum OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}


export class OneusersGetResponses200ContentApplication1jsonSchemaItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastlogin" })
  lastlogin?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApplicationDetails" })
  mobileApplicationDetails?: OneusersGetResponses200ContentApplication1jsonSchemaItemsMobileApplication;

  @SpeakeasyMetadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: OneusersGetResponses200ContentApplication1jsonSchemaItemsRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OneusersGetResponses200ContentApplication1jsonSchemaItemsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userCvl" })
  userCvl?: string;
}
