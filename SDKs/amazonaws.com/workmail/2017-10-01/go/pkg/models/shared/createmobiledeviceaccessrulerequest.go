package shared

type CreateMobileDeviceAccessRuleRequest struct {
	ClientToken               *string                          `json:"ClientToken,omitempty"`
	Description               *string                          `json:"Description,omitempty"`
	DeviceModels              []string                         `json:"DeviceModels,omitempty"`
	DeviceOperatingSystems    []string                         `json:"DeviceOperatingSystems,omitempty"`
	DeviceTypes               []string                         `json:"DeviceTypes,omitempty"`
	DeviceUserAgents          []string                         `json:"DeviceUserAgents,omitempty"`
	Effect                    MobileDeviceAccessRuleEffectEnum `json:"Effect"`
	Name                      string                           `json:"Name"`
	NotDeviceModels           []string                         `json:"NotDeviceModels,omitempty"`
	NotDeviceOperatingSystems []string                         `json:"NotDeviceOperatingSystems,omitempty"`
	NotDeviceTypes            []string                         `json:"NotDeviceTypes,omitempty"`
	NotDeviceUserAgents       []string                         `json:"NotDeviceUserAgents,omitempty"`
	OrganizationID            string                           `json:"OrganizationId"`
}
