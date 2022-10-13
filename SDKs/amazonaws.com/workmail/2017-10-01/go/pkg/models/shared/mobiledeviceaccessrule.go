package shared

import (
	"time"
)

type MobileDeviceAccessRule struct {
	DateCreated               *time.Time                        `json:"DateCreated"`
	DateModified              *time.Time                        `json:"DateModified"`
	Description               *string                           `json:"Description"`
	DeviceModels              []string                          `json:"DeviceModels"`
	DeviceOperatingSystems    []string                          `json:"DeviceOperatingSystems"`
	DeviceTypes               []string                          `json:"DeviceTypes"`
	DeviceUserAgents          []string                          `json:"DeviceUserAgents"`
	Effect                    *MobileDeviceAccessRuleEffectEnum `json:"Effect"`
	MobileDeviceAccessRuleID  *string                           `json:"MobileDeviceAccessRuleId"`
	Name                      *string                           `json:"Name"`
	NotDeviceModels           []string                          `json:"NotDeviceModels"`
	NotDeviceOperatingSystems []string                          `json:"NotDeviceOperatingSystems"`
	NotDeviceTypes            []string                          `json:"NotDeviceTypes"`
	NotDeviceUserAgents       []string                          `json:"NotDeviceUserAgents"`
}
