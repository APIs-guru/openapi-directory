package shared

type DeviceStateAccountStateEnum string

const (
	DeviceStateAccountStateEnumEnabled  DeviceStateAccountStateEnum = "enabled"
	DeviceStateAccountStateEnumDisabled DeviceStateAccountStateEnum = "disabled"
)

type DeviceState struct {
	AccountState *DeviceStateAccountStateEnum `json:"accountState"`
}
