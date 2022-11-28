package shared

// Condition
// A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
type Condition struct {
	DevicePolicy         *DevicePolicy `json:"devicePolicy,omitempty"`
	IPSubnetworks        []string      `json:"ipSubnetworks,omitempty"`
	Members              []string      `json:"members,omitempty"`
	Negate               *bool         `json:"negate,omitempty"`
	Regions              []string      `json:"regions,omitempty"`
	RequiredAccessLevels []string      `json:"requiredAccessLevels,omitempty"`
}
