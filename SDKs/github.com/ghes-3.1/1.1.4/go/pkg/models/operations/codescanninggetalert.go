package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningGetAlertPathParams struct {
	AlertNumber int64  `pathParam:"style=simple,explode=false,name=alert_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningGetAlert503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningGetAlertRequest struct {
	PathParams CodeScanningGetAlertPathParams
}

type CodeScanningGetAlertResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	CodeScanningAlert                            *shared.CodeScanningAlert
	CodeScanningGetAlert503ApplicationJSONObject *CodeScanningGetAlert503ApplicationJSON
}
