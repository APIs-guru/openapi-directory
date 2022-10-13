package shared

type DomainValidationRecord struct {
	DomainName     *string         `json:"domainName"`
	ResourceRecord *ResourceRecord `json:"resourceRecord"`
}
