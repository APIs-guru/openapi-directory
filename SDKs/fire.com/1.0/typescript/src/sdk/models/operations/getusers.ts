import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetUsersUserMobileApplicationOsEnum {
    Android = "Android"
,    Ios = "IOS"
,    Other = "OTHER"
}

export enum GetUsersUserMobileApplicationDeviceNameEnum {
    IPhone = "iPhone"
,    Android = "Android"
,    Other = "Other"
}

export enum GetUsersUserMobileApplicationStatusEnum {
    Live = "LIVE"
,    Closed = "CLOSED"
,    Locked = "LOCKED"
,    SmsSent = "SMS_SENT"
}


export class GetUsersUserMobileApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=OS" })
  os?: GetUsersUserMobileApplicationOsEnum;

  @Metadata({ data: "json, name=businessUserId" })
  businessUserId?: number;

  @Metadata({ data: "json, name=clientID" })
  clientId?: string;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: GetUsersUserMobileApplicationDeviceNameEnum;

  @Metadata({ data: "json, name=deviceOSVersion" })
  deviceOsVersion?: string;

  @Metadata({ data: "json, name=mobileApplicationId" })
  mobileApplicationId?: number;

  @Metadata({ data: "json, name=status" })
  status?: GetUsersUserMobileApplicationStatusEnum;
}

export enum GetUsersUserRoleEnum {
    Admin = "ADMIN"
,    FullUser = "FULL_USER"
,    ReadOnly = "READ_ONLY"
,    CardOnly = "CARD_ONLY"
}

export enum GetUsersUserStatusEnum {
    Live = "LIVE"
,    Closed = "CLOSED"
,    Frozen = "FROZEN"
,    InviteSent = "INVITE_SENT"
,    SmsCodeSent = "SMS_CODE_SENT"
}


export class GetUsersUser extends SpeakeasyBase {
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
  mobileApplicationDetails?: GetUsersUserMobileApplication;

  @Metadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @Metadata({ data: "json, name=role" })
  role?: GetUsersUserRoleEnum;

  @Metadata({ data: "json, name=status" })
  status?: GetUsersUserStatusEnum;

  @Metadata({ data: "json, name=userCvl" })
  userCvl?: string;
}


export class GetUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetUsersUser })
  users?: GetUsersUser[];
}
