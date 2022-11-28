import { SpeakeasyBase } from "../../../internal/utils";
import { ClearAppsDataParams } from "./clearappsdataparams";
import { ClearAppsDataStatus } from "./clearappsdatastatus";
export declare enum CommandErrorCodeEnum {
    CommandErrorCodeUnspecified = "COMMAND_ERROR_CODE_UNSPECIFIED",
    Unknown = "UNKNOWN",
    ApiLevel = "API_LEVEL",
    ManagementMode = "MANAGEMENT_MODE",
    InvalidValue = "INVALID_VALUE",
    Unsupported = "UNSUPPORTED"
}
export declare enum CommandResetPasswordFlagsEnum {
    ResetPasswordFlagUnspecified = "RESET_PASSWORD_FLAG_UNSPECIFIED",
    RequireEntry = "REQUIRE_ENTRY",
    DoNotAskCredentialsOnBoot = "DO_NOT_ASK_CREDENTIALS_ON_BOOT",
    LockNow = "LOCK_NOW"
}
export declare enum CommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Lock = "LOCK",
    ResetPassword = "RESET_PASSWORD",
    Reboot = "REBOOT",
    RelinquishOwnership = "RELINQUISH_OWNERSHIP",
    ClearAppData = "CLEAR_APP_DATA"
}
/**
 * A command.
**/
export declare class Command extends SpeakeasyBase {
    clearAppsDataParams?: ClearAppsDataParams;
    clearAppsDataStatus?: ClearAppsDataStatus;
    createTime?: string;
    duration?: string;
    errorCode?: CommandErrorCodeEnum;
    newPassword?: string;
    resetPasswordFlags?: CommandResetPasswordFlagsEnum[];
    type?: CommandTypeEnum;
    userName?: string;
}
