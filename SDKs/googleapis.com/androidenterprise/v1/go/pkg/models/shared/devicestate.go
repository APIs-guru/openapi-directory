package shared

type DeviceStateAccountStateEnum string

const (
	DeviceStateAccountStateEnumEnabled  DeviceStateAccountStateEnum = "enabled"
	DeviceStateAccountStateEnumDisabled DeviceStateAccountStateEnum = "disabled"
)

// DeviceState
// The state of a user's device, as accessed by the getState and setState methods on device resources.
type DeviceState struct {
	AccountState *DeviceStateAccountStateEnum `json:"accountState,omitempty"`
}
