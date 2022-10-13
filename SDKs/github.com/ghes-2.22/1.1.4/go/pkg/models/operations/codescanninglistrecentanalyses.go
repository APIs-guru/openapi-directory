package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningListRecentAnalysesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningListRecentAnalysesQueryParams struct {
	Page     *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Ref      *string `queryParam:"style=form,explode=true,name=ref"`
	SarifID  *string `queryParam:"style=form,explode=true,name=sarif_id"`
	ToolGUID *string `queryParam:"style=form,explode=true,name=tool_guid"`
	ToolName *string `queryParam:"style=form,explode=true,name=tool_name"`
}

type CodeScanningListRecentAnalysesRequest struct {
	PathParams  CodeScanningListRecentAnalysesPathParams
	QueryParams CodeScanningListRecentAnalysesQueryParams
}

type CodeScanningListRecentAnalyses503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type CodeScanningListRecentAnalysesResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	BasicError                                             *shared.BasicError
	CodeScanningAnalyses                                   []shared.CodeScanningAnalysis
	CodeScanningListRecentAnalyses503ApplicationJSONObject *CodeScanningListRecentAnalyses503ApplicationJSON
}
