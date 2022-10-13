package operations

import (
	"openapi/pkg/models/shared"
)

var FetchEvidenceContentServers = []string{
	"https://apiz.ebay.com{basePath}",
}

type FetchEvidenceContentPathParams struct {
	PaymentDisputeID string `pathParam:"style=simple,explode=false,name=payment_dispute_id"`
}

type FetchEvidenceContentQueryParams struct {
	EvidenceID string `queryParam:"style=form,explode=true,name=evidence_id"`
	FileID     string `queryParam:"style=form,explode=true,name=file_id"`
}

type FetchEvidenceContentSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type FetchEvidenceContentRequest struct {
	ServerURL   *string
	PathParams  FetchEvidenceContentPathParams
	QueryParams FetchEvidenceContentQueryParams
	Security    FetchEvidenceContentSecurity
}

type FetchEvidenceContentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
