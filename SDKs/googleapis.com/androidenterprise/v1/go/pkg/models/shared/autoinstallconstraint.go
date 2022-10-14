package shared

type AutoInstallConstraintChargingStateConstraintEnum string

const (
	AutoInstallConstraintChargingStateConstraintEnumChargingStateConstraintUnspecified AutoInstallConstraintChargingStateConstraintEnum = "chargingStateConstraintUnspecified"
	AutoInstallConstraintChargingStateConstraintEnumChargingNotRequired                AutoInstallConstraintChargingStateConstraintEnum = "chargingNotRequired"
	AutoInstallConstraintChargingStateConstraintEnumChargingRequired                   AutoInstallConstraintChargingStateConstraintEnum = "chargingRequired"
)

type AutoInstallConstraintDeviceIdleStateConstraintEnum string

const (
	AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleStateConstraintUnspecified AutoInstallConstraintDeviceIdleStateConstraintEnum = "deviceIdleStateConstraintUnspecified"
	AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleNotRequired                AutoInstallConstraintDeviceIdleStateConstraintEnum = "deviceIdleNotRequired"
	AutoInstallConstraintDeviceIdleStateConstraintEnumDeviceIdleRequired                   AutoInstallConstraintDeviceIdleStateConstraintEnum = "deviceIdleRequired"
)

type AutoInstallConstraintNetworkTypeConstraintEnum string

const (
	AutoInstallConstraintNetworkTypeConstraintEnumNetworkTypeConstraintUnspecified AutoInstallConstraintNetworkTypeConstraintEnum = "networkTypeConstraintUnspecified"
	AutoInstallConstraintNetworkTypeConstraintEnumAnyNetwork                       AutoInstallConstraintNetworkTypeConstraintEnum = "anyNetwork"
	AutoInstallConstraintNetworkTypeConstraintEnumUnmeteredNetwork                 AutoInstallConstraintNetworkTypeConstraintEnum = "unmeteredNetwork"
)

type AutoInstallConstraint struct {
	ChargingStateConstraint   *AutoInstallConstraintChargingStateConstraintEnum   `json:"chargingStateConstraint,omitempty"`
	DeviceIdleStateConstraint *AutoInstallConstraintDeviceIdleStateConstraintEnum `json:"deviceIdleStateConstraint,omitempty"`
	NetworkTypeConstraint     *AutoInstallConstraintNetworkTypeConstraintEnum     `json:"networkTypeConstraint,omitempty"`
}
