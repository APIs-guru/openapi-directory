import { SpeakeasyBase } from "../../../internal/utils";
import { Grant } from "./grant";
export declare enum UserDeveloperAccountPermissionsEnum {
    DeveloperLevelPermissionUnspecified = "DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED",
    CanSeeAllApps = "CAN_SEE_ALL_APPS",
    CanViewFinancialDataGlobal = "CAN_VIEW_FINANCIAL_DATA_GLOBAL",
    CanManagePermissionsGlobal = "CAN_MANAGE_PERMISSIONS_GLOBAL",
    CanEditGamesGlobal = "CAN_EDIT_GAMES_GLOBAL",
    CanPublishGamesGlobal = "CAN_PUBLISH_GAMES_GLOBAL",
    CanReplyToReviewsGlobal = "CAN_REPLY_TO_REVIEWS_GLOBAL",
    CanManagePublicApksGlobal = "CAN_MANAGE_PUBLIC_APKS_GLOBAL",
    CanManageTrackApksGlobal = "CAN_MANAGE_TRACK_APKS_GLOBAL",
    CanManageTrackUsersGlobal = "CAN_MANAGE_TRACK_USERS_GLOBAL",
    CanManagePublicListingGlobal = "CAN_MANAGE_PUBLIC_LISTING_GLOBAL",
    CanManageDraftAppsGlobal = "CAN_MANAGE_DRAFT_APPS_GLOBAL",
    CanCreateManagedPlayAppsGlobal = "CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL",
    CanChangeManagedPlaySettingGlobal = "CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL",
    CanManageOrdersGlobal = "CAN_MANAGE_ORDERS_GLOBAL"
}
export declare enum UserAccessStateEnum {
    AccessStateUnspecified = "ACCESS_STATE_UNSPECIFIED",
    Invited = "INVITED",
    InvitationExpired = "INVITATION_EXPIRED",
    AccessGranted = "ACCESS_GRANTED",
    AccessExpired = "ACCESS_EXPIRED"
}
/**
 * A user resource.
**/
export declare class UserInput extends SpeakeasyBase {
    developerAccountPermissions?: UserDeveloperAccountPermissionsEnum[];
    email?: string;
    expirationTime?: string;
    name?: string;
}
/**
 * A user resource.
**/
export declare class User extends SpeakeasyBase {
    accessState?: UserAccessStateEnum;
    developerAccountPermissions?: UserDeveloperAccountPermissionsEnum[];
    email?: string;
    expirationTime?: string;
    grants?: Grant[];
    name?: string;
    partial?: boolean;
}
