package shared

import (
	"time"
)

// MobileDeviceAccessRule
// A rule that controls access to mobile devices for an Amazon WorkMail group.
type MobileDeviceAccessRule struct {
	DateCreated               *time.Time                        `json:"DateCreated,omitempty"`
	DateModified              *time.Time                        `json:"DateModified,omitempty"`
	Description               *string                           `json:"Description,omitempty"`
	DeviceModels              []string                          `json:"DeviceModels,omitempty"`
	DeviceOperatingSystems    []string                          `json:"DeviceOperatingSystems,omitempty"`
	DeviceTypes               []string                          `json:"DeviceTypes,omitempty"`
	DeviceUserAgents          []string                          `json:"DeviceUserAgents,omitempty"`
	Effect                    *MobileDeviceAccessRuleEffectEnum `json:"Effect,omitempty"`
	MobileDeviceAccessRuleID  *string                           `json:"MobileDeviceAccessRuleId,omitempty"`
	Name                      *string                           `json:"Name,omitempty"`
	NotDeviceModels           []string                          `json:"NotDeviceModels,omitempty"`
	NotDeviceOperatingSystems []string                          `json:"NotDeviceOperatingSystems,omitempty"`
	NotDeviceTypes            []string                          `json:"NotDeviceTypes,omitempty"`
	NotDeviceUserAgents       []string                          `json:"NotDeviceUserAgents,omitempty"`
}
