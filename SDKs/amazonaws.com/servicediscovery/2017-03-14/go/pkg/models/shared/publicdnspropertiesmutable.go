package shared

// PublicDNSPropertiesMutable
// DNS properties for the public DNS namespace.
type PublicDNSPropertiesMutable struct {
	Soa Soa `json:"SOA"`
}
