import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GrantAppLevelPermissionsEnum {
    AppLevelPermissionUnspecified = "APP_LEVEL_PERMISSION_UNSPECIFIED",
    CanAccessApp = "CAN_ACCESS_APP",
    CanViewFinancialData = "CAN_VIEW_FINANCIAL_DATA",
    CanManagePermissions = "CAN_MANAGE_PERMISSIONS",
    CanReplyToReviews = "CAN_REPLY_TO_REVIEWS",
    CanManagePublicApks = "CAN_MANAGE_PUBLIC_APKS",
    CanManageTrackApks = "CAN_MANAGE_TRACK_APKS",
    CanManageTrackUsers = "CAN_MANAGE_TRACK_USERS",
    CanManagePublicListing = "CAN_MANAGE_PUBLIC_LISTING",
    CanManageDraftApps = "CAN_MANAGE_DRAFT_APPS",
    CanManageOrders = "CAN_MANAGE_ORDERS"
}
/**
 * An access grant resource.
**/
export declare class Grant extends SpeakeasyBase {
    appLevelPermissions?: GrantAppLevelPermissionsEnum[];
    name?: string;
    packageName?: string;
}
