package shared

type DomainMapping struct {
	ID              *string          `json:"id,omitempty"`
	Name            *string          `json:"name,omitempty"`
	ResourceRecords []ResourceRecord `json:"resourceRecords,omitempty"`
	SslSettings     *SslSettings     `json:"sslSettings,omitempty"`
}
