import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetUsersUserMobileApplicationOsEnum {
    Android = "Android",
    Ios = "IOS",
    Other = "OTHER"
}

export enum GetUsersUserMobileApplicationDeviceNameEnum {
    IPhone = "iPhone",
    Android = "Android",
    Other = "Other"
}

export enum GetUsersUserMobileApplicationStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Locked = "LOCKED",
    SmsSent = "SMS_SENT"
}


export class GetUsersUserMobileApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OS" })
  os?: GetUsersUserMobileApplicationOsEnum;

  @SpeakeasyMetadata({ data: "json, name=businessUserId" })
  businessUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=clientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: GetUsersUserMobileApplicationDeviceNameEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceOSVersion" })
  deviceOsVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApplicationId" })
  mobileApplicationId?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetUsersUserMobileApplicationStatusEnum;
}

export enum GetUsersUserRoleEnum {
    Admin = "ADMIN",
    FullUser = "FULL_USER",
    ReadOnly = "READ_ONLY",
    CardOnly = "CARD_ONLY"
}

export enum GetUsersUserStatusEnum {
    Live = "LIVE",
    Closed = "CLOSED",
    Frozen = "FROZEN",
    InviteSent = "INVITE_SENT",
    SmsCodeSent = "SMS_CODE_SENT"
}


export class GetUsersUser extends SpeakeasyBase {
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
  mobileApplicationDetails?: GetUsersUserMobileApplication;

  @SpeakeasyMetadata({ data: "json, name=mobileNumber" })
  mobileNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: GetUsersUserRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetUsersUserStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=userCvl" })
  userCvl?: string;
}


export class GetUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetUsersUser })
  users?: GetUsersUser[];
}
