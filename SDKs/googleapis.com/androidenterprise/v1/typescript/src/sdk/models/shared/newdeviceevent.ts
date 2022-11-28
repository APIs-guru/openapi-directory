import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NewDeviceEventManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile"
}


// NewDeviceEvent
/** 
 * An event generated when a new device is ready to be managed.
**/
export class NewDeviceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=dpcPackageName" })
  dpcPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=managementType" })
  managementType?: NewDeviceEventManagementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
