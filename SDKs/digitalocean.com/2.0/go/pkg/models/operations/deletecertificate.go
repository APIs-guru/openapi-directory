package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCertificatePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificate_id"`
}

type DeleteCertificateRequest struct {
	PathParams DeleteCertificatePathParams
}

type DeleteCertificate401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type DeleteCertificateResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteCertificate401ApplicationJSONObject                 *DeleteCertificate401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
