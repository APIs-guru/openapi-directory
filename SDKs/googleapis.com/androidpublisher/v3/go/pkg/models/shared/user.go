package shared

type UserAccessStateEnum string

const (
	UserAccessStateEnumAccessStateUnspecified UserAccessStateEnum = "ACCESS_STATE_UNSPECIFIED"
	UserAccessStateEnumInvited                UserAccessStateEnum = "INVITED"
	UserAccessStateEnumInvitationExpired      UserAccessStateEnum = "INVITATION_EXPIRED"
	UserAccessStateEnumAccessGranted          UserAccessStateEnum = "ACCESS_GRANTED"
	UserAccessStateEnumAccessExpired          UserAccessStateEnum = "ACCESS_EXPIRED"
)

type UserDeveloperAccountPermissionsEnum string

const (
	UserDeveloperAccountPermissionsEnumDeveloperLevelPermissionUnspecified UserDeveloperAccountPermissionsEnum = "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED"
	UserDeveloperAccountPermissionsEnumCanSeeAllApps                       UserDeveloperAccountPermissionsEnum = "CAN_SEE_ALL_APPS"
	UserDeveloperAccountPermissionsEnumCanViewFinancialDataGlobal          UserDeveloperAccountPermissionsEnum = "CAN_VIEW_FINANCIAL_DATA_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManagePermissionsGlobal          UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_PERMISSIONS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanEditGamesGlobal                  UserDeveloperAccountPermissionsEnum = "CAN_EDIT_GAMES_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanPublishGamesGlobal               UserDeveloperAccountPermissionsEnum = "CAN_PUBLISH_GAMES_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanReplyToReviewsGlobal             UserDeveloperAccountPermissionsEnum = "CAN_REPLY_TO_REVIEWS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManagePublicApksGlobal           UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_PUBLIC_APKS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManageTrackApksGlobal            UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_TRACK_APKS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManageTrackUsersGlobal           UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_TRACK_USERS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManagePublicListingGlobal        UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_PUBLIC_LISTING_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManageDraftAppsGlobal            UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_DRAFT_APPS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanCreateManagedPlayAppsGlobal      UserDeveloperAccountPermissionsEnum = "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanChangeManagedPlaySettingGlobal   UserDeveloperAccountPermissionsEnum = "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL"
	UserDeveloperAccountPermissionsEnumCanManageOrdersGlobal               UserDeveloperAccountPermissionsEnum = "CAN_MANAGE_ORDERS_GLOBAL"
)

type User struct {
	AccessState                 *UserAccessStateEnum                  `json:"accessState"`
	DeveloperAccountPermissions []UserDeveloperAccountPermissionsEnum `json:"developerAccountPermissions"`
	Email                       *string                               `json:"email"`
	ExpirationTime              *string                               `json:"expirationTime"`
	Grants                      []Grant                               `json:"grants"`
	Name                        *string                               `json:"name"`
	Partial                     *bool                                 `json:"partial"`
}
