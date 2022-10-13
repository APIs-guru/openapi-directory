package shared

import (
	"time"
)

type ActionEntityActionEnum string

const (
	ActionEntityActionEnumCreate            ActionEntityActionEnum = "create"
	ActionEntityActionEnumRead              ActionEntityActionEnum = "read"
	ActionEntityActionEnumUpdate            ActionEntityActionEnum = "update"
	ActionEntityActionEnumDestroy           ActionEntityActionEnum = "destroy"
	ActionEntityActionEnumMove              ActionEntityActionEnum = "move"
	ActionEntityActionEnumLogin             ActionEntityActionEnum = "login"
	ActionEntityActionEnumFailedlogin       ActionEntityActionEnum = "failedlogin"
	ActionEntityActionEnumCopy              ActionEntityActionEnum = "copy"
	ActionEntityActionEnumUserCreate        ActionEntityActionEnum = "user_create"
	ActionEntityActionEnumUserUpdate        ActionEntityActionEnum = "user_update"
	ActionEntityActionEnumUserDestroy       ActionEntityActionEnum = "user_destroy"
	ActionEntityActionEnumGroupCreate       ActionEntityActionEnum = "group_create"
	ActionEntityActionEnumGroupUpdate       ActionEntityActionEnum = "group_update"
	ActionEntityActionEnumGroupDestroy      ActionEntityActionEnum = "group_destroy"
	ActionEntityActionEnumPermissionCreate  ActionEntityActionEnum = "permission_create"
	ActionEntityActionEnumPermissionDestroy ActionEntityActionEnum = "permission_destroy"
	ActionEntityActionEnumAPIKeyCreate      ActionEntityActionEnum = "api_key_create"
	ActionEntityActionEnumAPIKeyUpdate      ActionEntityActionEnum = "api_key_update"
	ActionEntityActionEnumAPIKeyDestroy     ActionEntityActionEnum = "api_key_destroy"
)

type ActionEntityFailureTypeEnum string

const (
	ActionEntityFailureTypeEnumExpiredTrial                      ActionEntityFailureTypeEnum = "expired_trial"
	ActionEntityFailureTypeEnumAccountOverdue                    ActionEntityFailureTypeEnum = "account_overdue"
	ActionEntityFailureTypeEnumLockedOut                         ActionEntityFailureTypeEnum = "locked_out"
	ActionEntityFailureTypeEnumIPMismatch                        ActionEntityFailureTypeEnum = "ip_mismatch"
	ActionEntityFailureTypeEnumPasswordMismatch                  ActionEntityFailureTypeEnum = "password_mismatch"
	ActionEntityFailureTypeEnumSiteMismatch                      ActionEntityFailureTypeEnum = "site_mismatch"
	ActionEntityFailureTypeEnumUsernameNotFound                  ActionEntityFailureTypeEnum = "username_not_found"
	ActionEntityFailureTypeEnumNone                              ActionEntityFailureTypeEnum = "none"
	ActionEntityFailureTypeEnumNoFtpPermission                   ActionEntityFailureTypeEnum = "no_ftp_permission"
	ActionEntityFailureTypeEnumNoWebPermission                   ActionEntityFailureTypeEnum = "no_web_permission"
	ActionEntityFailureTypeEnumNoDirectory                       ActionEntityFailureTypeEnum = "no_directory"
	ActionEntityFailureTypeEnumErrnoEnoent                       ActionEntityFailureTypeEnum = "errno_enoent"
	ActionEntityFailureTypeEnumNoSftpPermission                  ActionEntityFailureTypeEnum = "no_sftp_permission"
	ActionEntityFailureTypeEnumNoDavPermission                   ActionEntityFailureTypeEnum = "no_dav_permission"
	ActionEntityFailureTypeEnumNoRestapiPermission               ActionEntityFailureTypeEnum = "no_restapi_permission"
	ActionEntityFailureTypeEnumKeyMismatch                       ActionEntityFailureTypeEnum = "key_mismatch"
	ActionEntityFailureTypeEnumRegionMismatch                    ActionEntityFailureTypeEnum = "region_mismatch"
	ActionEntityFailureTypeEnumExpiredAccess                     ActionEntityFailureTypeEnum = "expired_access"
	ActionEntityFailureTypeEnumDesktopIPMismatch                 ActionEntityFailureTypeEnum = "desktop_ip_mismatch"
	ActionEntityFailureTypeEnumDesktopAPIKeyNotUsedQuicklyEnough ActionEntityFailureTypeEnum = "desktop_api_key_not_used_quickly_enough"
	ActionEntityFailureTypeEnumDisabled                          ActionEntityFailureTypeEnum = "disabled"
	ActionEntityFailureTypeEnumCountryMismatch                   ActionEntityFailureTypeEnum = "country_mismatch"
)

type ActionEntityInterfaceEnum string

const (
	ActionEntityInterfaceEnumWeb           ActionEntityInterfaceEnum = "web"
	ActionEntityInterfaceEnumFtp           ActionEntityInterfaceEnum = "ftp"
	ActionEntityInterfaceEnumRobot         ActionEntityInterfaceEnum = "robot"
	ActionEntityInterfaceEnumJsapi         ActionEntityInterfaceEnum = "jsapi"
	ActionEntityInterfaceEnumWebdesktopapi ActionEntityInterfaceEnum = "webdesktopapi"
	ActionEntityInterfaceEnumSftp          ActionEntityInterfaceEnum = "sftp"
	ActionEntityInterfaceEnumDav           ActionEntityInterfaceEnum = "dav"
	ActionEntityInterfaceEnumDesktop       ActionEntityInterfaceEnum = "desktop"
	ActionEntityInterfaceEnumRestapi       ActionEntityInterfaceEnum = "restapi"
	ActionEntityInterfaceEnumScim          ActionEntityInterfaceEnum = "scim"
	ActionEntityInterfaceEnumOffice        ActionEntityInterfaceEnum = "office"
	ActionEntityInterfaceEnumMobile        ActionEntityInterfaceEnum = "mobile"
)

type ActionEntity struct {
	Action      *ActionEntityActionEnum      `json:"action"`
	Destination *string                      `json:"destination"`
	Display     *string                      `json:"display"`
	FailureType *ActionEntityFailureTypeEnum `json:"failure_type"`
	ID          *int32                       `json:"id"`
	Interface   *ActionEntityInterfaceEnum   `json:"interface"`
	IP          *string                      `json:"ip"`
	Path        *string                      `json:"path"`
	Source      *string                      `json:"source"`
	Targets     []string                     `json:"targets"`
	UserID      *int32                       `json:"user_id"`
	Username    *string                      `json:"username"`
	When        *time.Time                   `json:"when"`
}
