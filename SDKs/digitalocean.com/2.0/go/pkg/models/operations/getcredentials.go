package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCredentialsPathParams struct {
	ClusterID string `pathParam:"style=simple,explode=false,name=cluster_id"`
}

type GetCredentialsQueryParams struct {
	ExpirySeconds *int64 `queryParam:"style=form,explode=true,name=expiry_seconds"`
}

type GetCredentialsRequest struct {
	PathParams  GetCredentialsPathParams
	QueryParams GetCredentialsQueryParams
}

type GetCredentials200ApplicationJSON struct {
	CertificateAuthorityData *string    `json:"certificate_authority_data"`
	ClientCertificateData    *string    `json:"client_certificate_data"`
	ClientKeyData            *string    `json:"client_key_data"`
	ExpiresAt                *time.Time `json:"expires_at"`
	Server                   *string    `json:"server"`
	Token                    *string    `json:"token"`
}

type GetCredentials401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetCredentialsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetCredentials200ApplicationJSONObject                    *GetCredentials200ApplicationJSON
	GetCredentials401ApplicationJSONObject                    *GetCredentials401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
