import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppRestrictionsSchemaChangeEvent } from "./apprestrictionsschemachangeevent";
import { AppUpdateEvent } from "./appupdateevent";
import { DeviceReportUpdateEvent } from "./devicereportupdateevent";
import { InstallFailureEvent } from "./installfailureevent";
import { NewDeviceEvent } from "./newdeviceevent";
import { NewPermissionsEvent } from "./newpermissionsevent";
import { ProductApprovalEvent } from "./productapprovalevent";
import { ProductAvailabilityChangeEvent } from "./productavailabilitychangeevent";

export enum NotificationNotificationTypeEnum {
    Unknown = "unknown"
,    TestNotification = "testNotification"
,    ProductApproval = "productApproval"
,    InstallFailure = "installFailure"
,    AppUpdate = "appUpdate"
,    NewPermissions = "newPermissions"
,    AppRestricionsSchemaChange = "appRestricionsSchemaChange"
,    ProductAvailabilityChange = "productAvailabilityChange"
,    NewDevice = "newDevice"
,    DeviceReportUpdate = "deviceReportUpdate"
}


// Notification
/** 
 * A notification of one event relating to an enterprise.
**/
export class Notification extends SpeakeasyBase {
  @Metadata({ data: "json, name=appRestrictionsSchemaChangeEvent" })
  appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent;

  @Metadata({ data: "json, name=appUpdateEvent" })
  appUpdateEvent?: AppUpdateEvent;

  @Metadata({ data: "json, name=deviceReportUpdateEvent" })
  deviceReportUpdateEvent?: DeviceReportUpdateEvent;

  @Metadata({ data: "json, name=enterpriseId" })
  enterpriseId?: string;

  @Metadata({ data: "json, name=installFailureEvent" })
  installFailureEvent?: InstallFailureEvent;

  @Metadata({ data: "json, name=newDeviceEvent" })
  newDeviceEvent?: NewDeviceEvent;

  @Metadata({ data: "json, name=newPermissionsEvent" })
  newPermissionsEvent?: NewPermissionsEvent;

  @Metadata({ data: "json, name=notificationType" })
  notificationType?: NotificationNotificationTypeEnum;

  @Metadata({ data: "json, name=productApprovalEvent" })
  productApprovalEvent?: ProductApprovalEvent;

  @Metadata({ data: "json, name=productAvailabilityChangeEvent" })
  productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent;

  @Metadata({ data: "json, name=timestampMillis" })
  timestampMillis?: string;
}
