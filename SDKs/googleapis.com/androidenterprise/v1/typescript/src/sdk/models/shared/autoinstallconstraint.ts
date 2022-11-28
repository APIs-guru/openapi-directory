import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AutoInstallConstraintChargingStateConstraintEnum {
    ChargingStateConstraintUnspecified = "chargingStateConstraintUnspecified",
    ChargingNotRequired = "chargingNotRequired",
    ChargingRequired = "chargingRequired"
}

export enum AutoInstallConstraintDeviceIdleStateConstraintEnum {
    DeviceIdleStateConstraintUnspecified = "deviceIdleStateConstraintUnspecified",
    DeviceIdleNotRequired = "deviceIdleNotRequired",
    DeviceIdleRequired = "deviceIdleRequired"
}

export enum AutoInstallConstraintNetworkTypeConstraintEnum {
    NetworkTypeConstraintUnspecified = "networkTypeConstraintUnspecified",
    AnyNetwork = "anyNetwork",
    UnmeteredNetwork = "unmeteredNetwork"
}


// AutoInstallConstraint
/** 
 * The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.
**/
export class AutoInstallConstraint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargingStateConstraint" })
  chargingStateConstraint?: AutoInstallConstraintChargingStateConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=deviceIdleStateConstraint" })
  deviceIdleStateConstraint?: AutoInstallConstraintDeviceIdleStateConstraintEnum;

  @SpeakeasyMetadata({ data: "json, name=networkTypeConstraint" })
  networkTypeConstraint?: AutoInstallConstraintNetworkTypeConstraintEnum;
}
