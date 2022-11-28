package operations

import (
	"openapi/pkg/models/shared"
)

type CodeScanningUpdateAlertPathParams struct {
	AlertNumber int64  `pathParam:"style=simple,explode=false,name=alert_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type CodeScanningUpdateAlertRequestBody struct {
	DismissedReason *shared.CodeScanningAlertDismissedReasonEnum `json:"dismissed_reason,omitempty"`
	State           shared.CodeScanningAlertSetStateEnum         `json:"state"`
}

type CodeScanningUpdateAlert503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type CodeScanningUpdateAlertRequest struct {
	PathParams CodeScanningUpdateAlertPathParams
	Request    *CodeScanningUpdateAlertRequestBody `request:"mediaType=application/json"`
}

type CodeScanningUpdateAlertResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	BasicError                                      *shared.BasicError
	CodeScanningAlert                               *shared.CodeScanningAlert
	CodeScanningUpdateAlert503ApplicationJSONObject *CodeScanningUpdateAlert503ApplicationJSON
}
