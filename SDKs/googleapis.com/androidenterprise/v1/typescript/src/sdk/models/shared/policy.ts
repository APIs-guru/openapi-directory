import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindow } from "./maintenancewindow";
import { ProductPolicy } from "./productpolicy";


export enum PolicyAutoUpdatePolicyEnum {
    AutoUpdatePolicyUnspecified = "autoUpdatePolicyUnspecified",
    ChoiceToTheUser = "choiceToTheUser",
    Never = "never",
    WifiOnly = "wifiOnly",
    Always = "always"
}

export enum PolicyDeviceReportPolicyEnum {
    DeviceReportPolicyUnspecified = "deviceReportPolicyUnspecified",
    DeviceReportDisabled = "deviceReportDisabled",
    DeviceReportEnabled = "deviceReportEnabled"
}

export enum PolicyProductAvailabilityPolicyEnum {
    ProductAvailabilityPolicyUnspecified = "productAvailabilityPolicyUnspecified",
    Whitelist = "whitelist",
    All = "all"
}


// Policy
/** 
 * The device policy for a given managed device.
**/
export class Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoUpdatePolicy" })
  autoUpdatePolicy?: PolicyAutoUpdatePolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceReportPolicy" })
  deviceReportPolicy?: PolicyDeviceReportPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=maintenanceWindow" })
  maintenanceWindow?: MaintenanceWindow;

  @SpeakeasyMetadata({ data: "json, name=productAvailabilityPolicy" })
  productAvailabilityPolicy?: PolicyProductAvailabilityPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=productPolicy", elemType: ProductPolicy })
  productPolicy?: ProductPolicy[];
}
