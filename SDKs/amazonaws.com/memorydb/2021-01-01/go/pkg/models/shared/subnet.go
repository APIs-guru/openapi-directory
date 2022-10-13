package shared

type Subnet struct {
	AvailabilityZone *AvailabilityZone `json:"AvailabilityZone"`
	Identifier       *string           `json:"Identifier"`
}
