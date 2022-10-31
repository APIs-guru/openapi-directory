package shared

import (
"time")

type Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItems struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    CustomDomain *string `json:"custom_domain,omitempty"`
    Endpoint *string `json:"endpoint,omitempty"`
    ID *string `json:"id,omitempty"`
    Origin string `json:"origin"`
    TTL *int64 `json:"ttl,omitempty"`
    
}

