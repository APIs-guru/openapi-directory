import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaChangeEvent } from "./apprestrictionsschemachangeevent";
import { AppUpdateEvent } from "./appupdateevent";
import { DeviceReportUpdateEvent } from "./devicereportupdateevent";
import { InstallFailureEvent } from "./installfailureevent";
import { NewDeviceEvent } from "./newdeviceevent";
import { NewPermissionsEvent } from "./newpermissionsevent";
import { ProductApprovalEvent } from "./productapprovalevent";
import { ProductAvailabilityChangeEvent } from "./productavailabilitychangeevent";


export enum NotificationNotificationTypeEnum {
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


// Notification
/** 
 * A notification of one event relating to an enterprise.
**/
export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appRestrictionsSchemaChangeEvent" })
  appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;

  @SpeakeasyMetadata({ data: "json, name=appUpdateEvent" })
  appUpdateEvent?: AppUpdateEvent;

  @SpeakeasyMetadata({ data: "json, name=deviceReportUpdateEvent" })
  deviceReportUpdateEvent?: DeviceReportUpdateEvent;

  @SpeakeasyMetadata({ data: "json, name=enterpriseId" })
  enterpriseId?: string;

  @SpeakeasyMetadata({ data: "json, name=installFailureEvent" })
  installFailureEvent?: InstallFailureEvent;

  @SpeakeasyMetadata({ data: "json, name=newDeviceEvent" })
  newDeviceEvent?: NewDeviceEvent;

  @SpeakeasyMetadata({ data: "json, name=newPermissionsEvent" })
  newPermissionsEvent?: NewPermissionsEvent;

  @SpeakeasyMetadata({ data: "json, name=notificationType" })
  notificationType?: NotificationNotificationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=productApprovalEvent" })
  productApprovalEvent?: ProductApprovalEvent;

  @SpeakeasyMetadata({ data: "json, name=productAvailabilityChangeEvent" })
  productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;

  @SpeakeasyMetadata({ data: "json, name=timestampMillis" })
  timestampMillis?: string;
}
