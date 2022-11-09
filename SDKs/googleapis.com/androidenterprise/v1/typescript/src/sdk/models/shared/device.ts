import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";
import { DeviceReport } from "./devicereport";

export enum DeviceManagementTypeEnum {
    ManagedDevice = "managedDevice"
,    ManagedProfile = "managedProfile"
,    ContainerApp = "containerApp"
,    UnmanagedProfile = "unmanagedProfile"
}


// Device
/** 
 * A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidId" })
  androidId?: string;

  @Metadata({ data: "json, name=managementType" })
  managementType?: DeviceManagementTypeEnum;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;

  @Metadata({ data: "json, name=report" })
  report?: DeviceReport;
}
