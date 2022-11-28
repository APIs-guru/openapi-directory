package shared

// AvailabilityZone
// Describes an Availability Zone.
type AvailabilityZone struct {
	State    *string `json:"state,omitempty"`
	ZoneName *string `json:"zoneName,omitempty"`
}
