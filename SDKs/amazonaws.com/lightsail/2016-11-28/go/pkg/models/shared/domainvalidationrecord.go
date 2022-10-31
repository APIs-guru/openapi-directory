package shared

type DomainValidationRecord struct {
	DomainName     *string         `json:"domainName,omitempty"`
	ResourceRecord *ResourceRecord `json:"resourceRecord,omitempty"`
}
