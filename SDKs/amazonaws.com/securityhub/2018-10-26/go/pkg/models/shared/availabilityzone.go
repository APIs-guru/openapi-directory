package shared

// AvailabilityZone
// Information about an Availability Zone.
type AvailabilityZone struct {
	SubnetID *string `json:"SubnetId,omitempty"`
	ZoneName *string `json:"ZoneName,omitempty"`
}
