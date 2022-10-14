package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningListAlertsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningListAlertsForRepoQueryParams struct {
	Page     *int64                             `queryParam:"style=form,explode=true,name=page"`
	PerPage  *int64                             `queryParam:"style=form,explode=true,name=per_page"`
	Ref      *string                            `queryParam:"style=form,explode=true,name=ref"`
	State    *shared.CodeScanningAlertStateEnum `queryParam:"style=form,explode=true,name=state"`
	ToolGUID *string                            `queryParam:"style=form,explode=true,name=tool_guid"`
	ToolName *string                            `queryParam:"style=form,explode=true,name=tool_name"`
}

type CodeScanningListAlertsForRepoRequest struct {
	PathParams  CodeScanningListAlertsForRepoPathParams
	QueryParams CodeScanningListAlertsForRepoQueryParams
}

type CodeScanningListAlertsForRepo503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningListAlertsForRepoResponse struct {
	ContentType                                           string
	StatusCode                                            int64
	BasicError                                            *shared.BasicError
	CodeScanningAlertItems                                []shared.CodeScanningAlertItems
	CodeScanningListAlertsForRepo503ApplicationJSONObject *CodeScanningListAlertsForRepo503ApplicationJSON
}
