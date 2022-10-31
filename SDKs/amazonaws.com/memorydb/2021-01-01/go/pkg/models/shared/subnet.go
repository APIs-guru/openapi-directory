package shared

type Subnet struct {
	AvailabilityZone *AvailabilityZone `json:"AvailabilityZone,omitempty"`
	Identifier       *string           `json:"Identifier,omitempty"`
}
