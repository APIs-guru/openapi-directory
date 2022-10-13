package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningListAlertsInstancesPathParams struct {
	AlertNumber int64  `pathParam:"style=simple,explode=false,name=alert_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningListAlertsInstancesQueryParams struct {
	Page    *int64  `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Ref     *string `queryParam:"style=form,explode=true,name=ref"`
}

type CodeScanningListAlertsInstancesRequest struct {
	PathParams  CodeScanningListAlertsInstancesPathParams
	QueryParams CodeScanningListAlertsInstancesQueryParams
}

type CodeScanningListAlertsInstances503ApplicationJSON struct {
	Code             *string `json:"code"`
	DocumentationURL *string `json:"documentation_url"`
	Message          *string `json:"message"`
}

type CodeScanningListAlertsInstancesResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	BasicError                                              *shared.BasicError
	CodeScanningAlertInstances                              []shared.CodeScanningAlertInstance
	CodeScanningListAlertsInstances503ApplicationJSONObject *CodeScanningListAlertsInstances503ApplicationJSON
}
