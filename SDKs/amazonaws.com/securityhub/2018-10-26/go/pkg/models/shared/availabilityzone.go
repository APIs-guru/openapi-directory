package shared

type AvailabilityZone struct {
	SubnetID *string `json:"SubnetId,omitempty"`
	ZoneName *string `json:"ZoneName,omitempty"`
}
