package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningGetAnalysisPathParams struct {
	AnalysisID int64  `pathParam:"style=simple,explode=false,name=analysis_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningGetAnalysisRequest struct {
	PathParams CodeScanningGetAnalysisPathParams
}

type CodeScanningGetAnalysis503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningGetAnalysisResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	BasicError                                               *shared.BasicError
	CodeScanningAnalysis                                     *shared.CodeScanningAnalysis
	CodeScanningGetAnalysis200ApplicationJSONPlusSarifString *string
	CodeScanningGetAnalysis503ApplicationJSONObject          *CodeScanningGetAnalysis503ApplicationJSON
}
