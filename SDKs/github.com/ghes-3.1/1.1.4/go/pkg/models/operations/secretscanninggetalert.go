package operations

import (
	"openapi/pkg/models/shared"
)

type SecretScanningGetAlertPathParams struct {
	AlertNumber int64  `pathParam:"style=simple,explode=false,name=alert_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type SecretScanningGetAlert503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type SecretScanningGetAlertRequest struct {
	PathParams SecretScanningGetAlertPathParams
}

type SecretScanningGetAlertResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	SecretScanningAlert                            *shared.SecretScanningAlert
	SecretScanningGetAlert503ApplicationJSONObject *SecretScanningGetAlert503ApplicationJSON
}
