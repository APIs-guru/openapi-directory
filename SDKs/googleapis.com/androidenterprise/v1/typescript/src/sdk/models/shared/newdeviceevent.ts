import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NewDeviceEventManagementTypeEnum {
    ManagedDevice = "managedDevice"
,    ManagedProfile = "managedProfile"
}


// NewDeviceEvent
/** 
 * An event generated when a new device is ready to be managed.
**/
export class NewDeviceEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=dpcPackageName" })
  dpcPackageName?: string;

  @Metadata({ data: "json, name=managementType" })
  managementType?: NewDeviceEventManagementTypeEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
