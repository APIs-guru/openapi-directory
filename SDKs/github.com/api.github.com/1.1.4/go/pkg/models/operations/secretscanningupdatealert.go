package operations

import (
	"openapi/pkg/models/shared"
)

type SecretScanningUpdateAlertPathParams struct {
	AlertNumber int64  `pathParam:"style=simple,explode=false,name=alert_number"`
	Owner       string `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string `pathParam:"style=simple,explode=false,name=repo"`
}

type SecretScanningUpdateAlertRequestBody struct {
	Resolution *string                             `json:"resolution,omitempty"`
	State      shared.SecretScanningAlertStateEnum `json:"state"`
}

type SecretScanningUpdateAlertRequest struct {
	PathParams SecretScanningUpdateAlertPathParams
	Request    *SecretScanningUpdateAlertRequestBody `request:"mediaType=application/json"`
}

type SecretScanningUpdateAlert503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type SecretScanningUpdateAlertResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	SecretScanningAlert                               *shared.SecretScanningAlert
	SecretScanningUpdateAlert503ApplicationJSONObject *SecretScanningUpdateAlert503ApplicationJSON
}
