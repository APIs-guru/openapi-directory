package shared

// DomainValidationRecord
// Describes the domain validation records of an Amazon Lightsail SSL/TLS certificate.
type DomainValidationRecord struct {
	DomainName     *string         `json:"domainName,omitempty"`
	ResourceRecord *ResourceRecord `json:"resourceRecord,omitempty"`
}
