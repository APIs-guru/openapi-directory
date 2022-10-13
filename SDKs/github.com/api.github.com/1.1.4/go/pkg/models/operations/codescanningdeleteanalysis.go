package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningDeleteAnalysisPathParams struct {
	AnalysisID int64  `pathParam:"style=simple,explode=false,name=analysis_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningDeleteAnalysisQueryParams struct {
	ConfirmDelete *string `queryParam:"style=form,explode=true,name=confirm_delete"`
}

type CodeScanningDeleteAnalysisRequest struct {
	PathParams  CodeScanningDeleteAnalysisPathParams
	QueryParams CodeScanningDeleteAnalysisQueryParams
}

type CodeScanningDeleteAnalysis503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type CodeScanningDeleteAnalysisResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	BasicError                                         *shared.BasicError
	CodeScanningAnalysisDeletion                       *shared.CodeScanningAnalysisDeletion
	CodeScanningDeleteAnalysis503ApplicationJSONObject *CodeScanningDeleteAnalysis503ApplicationJSON
	ScimError                                          *shared.ScimError
}
