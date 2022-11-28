import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AutoInstallConstraintChargingStateConstraintEnum {
    ChargingStateConstraintUnspecified = "chargingStateConstraintUnspecified",
    ChargingNotRequired = "chargingNotRequired",
    ChargingRequired = "chargingRequired"
}
export declare enum AutoInstallConstraintDeviceIdleStateConstraintEnum {
    DeviceIdleStateConstraintUnspecified = "deviceIdleStateConstraintUnspecified",
    DeviceIdleNotRequired = "deviceIdleNotRequired",
    DeviceIdleRequired = "deviceIdleRequired"
}
export declare enum AutoInstallConstraintNetworkTypeConstraintEnum {
    NetworkTypeConstraintUnspecified = "networkTypeConstraintUnspecified",
    AnyNetwork = "anyNetwork",
    UnmeteredNetwork = "unmeteredNetwork"
}
/**
 * The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
**/
export declare class AutoInstallConstraint extends SpeakeasyBase {
    chargingStateConstraint?: AutoInstallConstraintChargingStateConstraintEnum;
    deviceIdleStateConstraint?: AutoInstallConstraintDeviceIdleStateConstraintEnum;
    networkTypeConstraint?: AutoInstallConstraintNetworkTypeConstraintEnum;
}
