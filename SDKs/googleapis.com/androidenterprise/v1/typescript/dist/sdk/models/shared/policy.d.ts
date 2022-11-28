import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindow } from "./maintenancewindow";
import { ProductPolicy } from "./productpolicy";
export declare enum PolicyAutoUpdatePolicyEnum {
    AutoUpdatePolicyUnspecified = "autoUpdatePolicyUnspecified",
    ChoiceToTheUser = "choiceToTheUser",
    Never = "never",
    WifiOnly = "wifiOnly",
    Always = "always"
}
export declare enum PolicyDeviceReportPolicyEnum {
    DeviceReportPolicyUnspecified = "deviceReportPolicyUnspecified",
    DeviceReportDisabled = "deviceReportDisabled",
    DeviceReportEnabled = "deviceReportEnabled"
}
export declare enum PolicyProductAvailabilityPolicyEnum {
    ProductAvailabilityPolicyUnspecified = "productAvailabilityPolicyUnspecified",
    Whitelist = "whitelist",
    All = "all"
}
/**
 * The device policy for a given managed device.
**/
export declare class Policy extends SpeakeasyBase {
    autoUpdatePolicy?: PolicyAutoUpdatePolicyEnum;
    deviceReportPolicy?: PolicyDeviceReportPolicyEnum;
    maintenanceWindow?: MaintenanceWindow;
    productAvailabilityPolicy?: PolicyProductAvailabilityPolicyEnum;
    productPolicy?: ProductPolicy[];
}
