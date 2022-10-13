package shared

type DomainMapping struct {
	ID              *string          `json:"id"`
	Name            *string          `json:"name"`
	ResourceRecords []ResourceRecord `json:"resourceRecords"`
	SslSettings     *SslSettings     `json:"sslSettings"`
}
