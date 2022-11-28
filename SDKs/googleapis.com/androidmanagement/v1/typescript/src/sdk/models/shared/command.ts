import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClearAppsDataParams } from "./clearappsdataparams";
import { ClearAppsDataStatus } from "./clearappsdatastatus";


export enum CommandErrorCodeEnum {
    CommandErrorCodeUnspecified = "COMMAND_ERROR_CODE_UNSPECIFIED",
    Unknown = "UNKNOWN",
    ApiLevel = "API_LEVEL",
    ManagementMode = "MANAGEMENT_MODE",
    InvalidValue = "INVALID_VALUE",
    Unsupported = "UNSUPPORTED"
}

export enum CommandResetPasswordFlagsEnum {
    ResetPasswordFlagUnspecified = "RESET_PASSWORD_FLAG_UNSPECIFIED",
    RequireEntry = "REQUIRE_ENTRY",
    DoNotAskCredentialsOnBoot = "DO_NOT_ASK_CREDENTIALS_ON_BOOT",
    LockNow = "LOCK_NOW"
}

export enum CommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Lock = "LOCK",
    ResetPassword = "RESET_PASSWORD",
    Reboot = "REBOOT",
    RelinquishOwnership = "RELINQUISH_OWNERSHIP",
    ClearAppData = "CLEAR_APP_DATA"
}


// Command
/** 
 * A command.
**/
export class Command extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clearAppsDataParams" })
  clearAppsDataParams?: ClearAppsDataParams;

  @SpeakeasyMetadata({ data: "json, name=clearAppsDataStatus" })
  clearAppsDataStatus?: ClearAppsDataStatus;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: CommandErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=newPassword" })
  newPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=resetPasswordFlags" })
  resetPasswordFlags?: CommandResetPasswordFlagsEnum[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CommandTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
