package shared

type CreateMobileDeviceAccessRuleRequest struct {
	ClientToken               *string                          `json:"ClientToken"`
	Description               *string                          `json:"Description"`
	DeviceModels              []string                         `json:"DeviceModels"`
	DeviceOperatingSystems    []string                         `json:"DeviceOperatingSystems"`
	DeviceTypes               []string                         `json:"DeviceTypes"`
	DeviceUserAgents          []string                         `json:"DeviceUserAgents"`
	Effect                    MobileDeviceAccessRuleEffectEnum `json:"Effect"`
	Name                      string                           `json:"Name"`
	NotDeviceModels           []string                         `json:"NotDeviceModels"`
	NotDeviceOperatingSystems []string                         `json:"NotDeviceOperatingSystems"`
	NotDeviceTypes            []string                         `json:"NotDeviceTypes"`
	NotDeviceUserAgents       []string                         `json:"NotDeviceUserAgents"`
	OrganizationID            string                           `json:"OrganizationId"`
}
