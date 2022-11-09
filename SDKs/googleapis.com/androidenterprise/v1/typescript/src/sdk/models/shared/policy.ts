import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindow } from "./maintenancewindow";
import { ProductPolicy } from "./productpolicy";

export enum PolicyAutoUpdatePolicyEnum {
    AutoUpdatePolicyUnspecified = "autoUpdatePolicyUnspecified"
,    ChoiceToTheUser = "choiceToTheUser"
,    Never = "never"
,    WifiOnly = "wifiOnly"
,    Always = "always"
}

export enum PolicyDeviceReportPolicyEnum {
    DeviceReportPolicyUnspecified = "deviceReportPolicyUnspecified"
,    DeviceReportDisabled = "deviceReportDisabled"
,    DeviceReportEnabled = "deviceReportEnabled"
}

export enum PolicyProductAvailabilityPolicyEnum {
    ProductAvailabilityPolicyUnspecified = "productAvailabilityPolicyUnspecified"
,    Whitelist = "whitelist"
,    All = "all"
}


// Policy
/** 
 * The device policy for a given managed device.
**/
export class Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoUpdatePolicy" })
  autoUpdatePolicy?: PolicyAutoUpdatePolicyEnum;

  @Metadata({ data: "json, name=deviceReportPolicy" })
  deviceReportPolicy?: PolicyDeviceReportPolicyEnum;

  @Metadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @Metadata({ data: "json, name=productAvailabilityPolicy" })
  productAvailabilityPolicy?: PolicyProductAvailabilityPolicyEnum;

  @Metadata({ data: "json, name=productPolicy", elemType: shared.ProductPolicy })
  productPolicy?: ProductPolicy[];
}
