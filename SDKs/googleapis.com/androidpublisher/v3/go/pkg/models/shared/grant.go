package shared

type GrantAppLevelPermissionsEnum string

const (
	GrantAppLevelPermissionsEnumAppLevelPermissionUnspecified GrantAppLevelPermissionsEnum = "APP_LEVEL_PERMISSION_UNSPECIFIED"
	GrantAppLevelPermissionsEnumCanAccessApp                  GrantAppLevelPermissionsEnum = "CAN_ACCESS_APP"
	GrantAppLevelPermissionsEnumCanViewFinancialData          GrantAppLevelPermissionsEnum = "CAN_VIEW_FINANCIAL_DATA"
	GrantAppLevelPermissionsEnumCanManagePermissions          GrantAppLevelPermissionsEnum = "CAN_MANAGE_PERMISSIONS"
	GrantAppLevelPermissionsEnumCanReplyToReviews             GrantAppLevelPermissionsEnum = "CAN_REPLY_TO_REVIEWS"
	GrantAppLevelPermissionsEnumCanManagePublicApks           GrantAppLevelPermissionsEnum = "CAN_MANAGE_PUBLIC_APKS"
	GrantAppLevelPermissionsEnumCanManageTrackApks            GrantAppLevelPermissionsEnum = "CAN_MANAGE_TRACK_APKS"
	GrantAppLevelPermissionsEnumCanManageTrackUsers           GrantAppLevelPermissionsEnum = "CAN_MANAGE_TRACK_USERS"
	GrantAppLevelPermissionsEnumCanManagePublicListing        GrantAppLevelPermissionsEnum = "CAN_MANAGE_PUBLIC_LISTING"
	GrantAppLevelPermissionsEnumCanManageDraftApps            GrantAppLevelPermissionsEnum = "CAN_MANAGE_DRAFT_APPS"
	GrantAppLevelPermissionsEnumCanManageOrders               GrantAppLevelPermissionsEnum = "CAN_MANAGE_ORDERS"
)

type Grant struct {
	AppLevelPermissions []GrantAppLevelPermissionsEnum `json:"appLevelPermissions"`
	Name                *string                        `json:"name"`
	PackageName         *string                        `json:"packageName"`
}
