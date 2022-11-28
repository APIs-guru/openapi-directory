import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GrantAppLevelPermissionsEnum {
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


// Grant
/** 
 * An access grant resource.
**/
export class Grant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appLevelPermissions" })
  appLevelPermissions?: GrantAppLevelPermissionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
