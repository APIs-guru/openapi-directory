package shared

// Subnet
// Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
type Subnet struct {
	AvailabilityZone *AvailabilityZone `json:"AvailabilityZone,omitempty"`
	Identifier       *string           `json:"Identifier,omitempty"`
}
