package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningGetSarifPathParams struct {
	Owner   string `pathParam:"style=simple,explode=false,name=owner"`
	Repo    string `pathParam:"style=simple,explode=false,name=repo"`
	SarifID string `pathParam:"style=simple,explode=false,name=sarif_id"`
}

type CodeScanningGetSarif503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningGetSarifRequest struct {
	PathParams CodeScanningGetSarifPathParams
}

type CodeScanningGetSarifResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	CodeScanningSarifsStatus                     *shared.CodeScanningSarifsStatus
	CodeScanningGetSarif503ApplicationJSONObject *CodeScanningGetSarif503ApplicationJSON
}
