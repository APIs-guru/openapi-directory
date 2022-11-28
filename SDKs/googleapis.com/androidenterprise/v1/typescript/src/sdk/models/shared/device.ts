import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";
import { DeviceReport } from "./devicereport";


export enum DeviceManagementTypeEnum {
    ManagedDevice = "managedDevice",
    ManagedProfile = "managedProfile",
    ContainerApp = "containerApp",
    UnmanagedProfile = "unmanagedProfile"
}


// Device
/** 
 * A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidId" })
  androidId?: string;

  @SpeakeasyMetadata({ data: "json, name=managementType" })
  managementType?: DeviceManagementTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=report" })
  report?: DeviceReport;
}
