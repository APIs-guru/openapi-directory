package shared

// IPRange
// Describes an IP range used in a security group.
type IPRange struct {
	Cidrip *string
	Status *string
	Tags   []Tag
}
