package shared

// ResourceRecord
// Describes the domain name system (DNS) records to add to your domain's DNS to validate it for an Amazon Lightsail certificate.
type ResourceRecord struct {
	Name  *string `json:"name,omitempty"`
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
