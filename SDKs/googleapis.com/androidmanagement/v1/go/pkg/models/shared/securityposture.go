package shared

type SecurityPostureDevicePostureEnum string

const (
	SecurityPostureDevicePostureEnumPostureUnspecified     SecurityPostureDevicePostureEnum = "POSTURE_UNSPECIFIED"
	SecurityPostureDevicePostureEnumSecure                 SecurityPostureDevicePostureEnum = "SECURE"
	SecurityPostureDevicePostureEnumAtRisk                 SecurityPostureDevicePostureEnum = "AT_RISK"
	SecurityPostureDevicePostureEnumPotentiallyCompromised SecurityPostureDevicePostureEnum = "POTENTIALLY_COMPROMISED"
)

// SecurityPosture
// The security posture of the device, as determined by the current device state and the policies applied.
type SecurityPosture struct {
	DevicePosture  *SecurityPostureDevicePostureEnum `json:"devicePosture,omitempty"`
	PostureDetails []PostureDetail                   `json:"postureDetails,omitempty"`
}
