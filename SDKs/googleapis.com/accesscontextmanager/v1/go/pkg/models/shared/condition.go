package shared

type Condition struct {
	DevicePolicy         *DevicePolicy `json:"devicePolicy"`
	IPSubnetworks        []string      `json:"ipSubnetworks"`
	Members              []string      `json:"members"`
	Negate               *bool         `json:"negate"`
	Regions              []string      `json:"regions"`
	RequiredAccessLevels []string      `json:"requiredAccessLevels"`
}
