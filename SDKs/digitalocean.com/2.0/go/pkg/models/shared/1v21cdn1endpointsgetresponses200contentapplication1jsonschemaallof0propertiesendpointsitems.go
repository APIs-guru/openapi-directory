package shared

import (
	"time"
)

type Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItems struct {
	CertificateID *string    `json:"certificate_id"`
	CreatedAt     *time.Time `json:"created_at"`
	CustomDomain  *string    `json:"custom_domain"`
	Endpoint      *string    `json:"endpoint"`
	ID            *string    `json:"id"`
	Origin        string     `json:"origin"`
	TTL           *int64     `json:"ttl"`
}
