import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaChangeEvent } from "./apprestrictionsschemachangeevent";
import { AppUpdateEvent } from "./appupdateevent";
import { DeviceReportUpdateEvent } from "./devicereportupdateevent";
import { InstallFailureEvent } from "./installfailureevent";
import { NewDeviceEvent } from "./newdeviceevent";
import { NewPermissionsEvent } from "./newpermissionsevent";
import { ProductApprovalEvent } from "./productapprovalevent";
import { ProductAvailabilityChangeEvent } from "./productavailabilitychangeevent";
export declare enum NotificationNotificationTypeEnum {
    Unknown = "unknown",
    TestNotification = "testNotification",
    ProductApproval = "productApproval",
    InstallFailure = "installFailure",
    AppUpdate = "appUpdate",
    NewPermissions = "newPermissions",
    AppRestricionsSchemaChange = "appRestricionsSchemaChange",
    ProductAvailabilityChange = "productAvailabilityChange",
    NewDevice = "newDevice",
    DeviceReportUpdate = "deviceReportUpdate"
}
/**
 * A notification of one event relating to an enterprise.
**/
export declare class Notification extends SpeakeasyBase {
    appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;
    appUpdateEvent?: AppUpdateEvent;
    deviceReportUpdateEvent?: DeviceReportUpdateEvent;
    enterpriseId?: string;
    installFailureEvent?: InstallFailureEvent;
    newDeviceEvent?: NewDeviceEvent;
    newPermissionsEvent?: NewPermissionsEvent;
    notificationType?: NotificationNotificationTypeEnum;
    productApprovalEvent?: ProductApprovalEvent;
    productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;
    timestampMillis?: string;
}
