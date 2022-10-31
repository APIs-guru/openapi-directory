package shared




type CommandErrorCodeEnum string

const (
    CommandErrorCodeEnumCommandErrorCodeUnspecified CommandErrorCodeEnum = "COMMAND_ERROR_CODE_UNSPECIFIED"
CommandErrorCodeEnumUnknown CommandErrorCodeEnum = "UNKNOWN"
CommandErrorCodeEnumAPILevel CommandErrorCodeEnum = "API_LEVEL"
CommandErrorCodeEnumManagementMode CommandErrorCodeEnum = "MANAGEMENT_MODE"
CommandErrorCodeEnumInvalidValue CommandErrorCodeEnum = "INVALID_VALUE"
CommandErrorCodeEnumUnsupported CommandErrorCodeEnum = "UNSUPPORTED"
)



type CommandResetPasswordFlagsEnum string

const (
    CommandResetPasswordFlagsEnumResetPasswordFlagUnspecified CommandResetPasswordFlagsEnum = "RESET_PASSWORD_FLAG_UNSPECIFIED"
CommandResetPasswordFlagsEnumRequireEntry CommandResetPasswordFlagsEnum = "REQUIRE_ENTRY"
CommandResetPasswordFlagsEnumDoNotAskCredentialsOnBoot CommandResetPasswordFlagsEnum = "DO_NOT_ASK_CREDENTIALS_ON_BOOT"
CommandResetPasswordFlagsEnumLockNow CommandResetPasswordFlagsEnum = "LOCK_NOW"
)



type CommandTypeEnum string

const (
    CommandTypeEnumCommandTypeUnspecified CommandTypeEnum = "COMMAND_TYPE_UNSPECIFIED"
CommandTypeEnumLock CommandTypeEnum = "LOCK"
CommandTypeEnumResetPassword CommandTypeEnum = "RESET_PASSWORD"
CommandTypeEnumReboot CommandTypeEnum = "REBOOT"
CommandTypeEnumRelinquishOwnership CommandTypeEnum = "RELINQUISH_OWNERSHIP"
CommandTypeEnumClearAppData CommandTypeEnum = "CLEAR_APP_DATA"
)


type Command struct {
    ClearAppsDataParams *ClearAppsDataParams `json:"clearAppsDataParams,omitempty"`
    ClearAppsDataStatus *ClearAppsDataStatus `json:"clearAppsDataStatus,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Duration *string `json:"duration,omitempty"`
    ErrorCode *CommandErrorCodeEnum `json:"errorCode,omitempty"`
    NewPassword *string `json:"newPassword,omitempty"`
    ResetPasswordFlags []CommandResetPasswordFlagsEnum `json:"resetPasswordFlags,omitempty"`
    Type *CommandTypeEnum `json:"type,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

