package shared

// PrivateDNSPropertiesMutableChange
// Updated DNS properties for the private DNS namespace.
type PrivateDNSPropertiesMutableChange struct {
	Soa SoaChange `json:"SOA"`
}
