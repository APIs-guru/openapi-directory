package operations

import (
	"openapi/pkg/models/shared"
)

type SecretScanningListAlertsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type SecretScanningListAlertsForRepoStateEnum string

const (
	SecretScanningListAlertsForRepoStateEnumOpen     SecretScanningListAlertsForRepoStateEnum = "open"
	SecretScanningListAlertsForRepoStateEnumResolved SecretScanningListAlertsForRepoStateEnum = "resolved"
)

type SecretScanningListAlertsForRepoQueryParams struct {
	Page    *int64                                    `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                                    `queryParam:"style=form,explode=true,name=per_page"`
	State   *SecretScanningListAlertsForRepoStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type SecretScanningListAlertsForRepoRequest struct {
	PathParams  SecretScanningListAlertsForRepoPathParams
	QueryParams SecretScanningListAlertsForRepoQueryParams
}

type SecretScanningListAlertsForRepo503ApplicationJSON struct {
	Code             *string `json:"code,omitempty"`
	DocumentationURL *string `json:"documentation_url,omitempty"`
	Message          *string `json:"message,omitempty"`
}

type SecretScanningListAlertsForRepoResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	SecretScanningAlerts                                    []shared.SecretScanningAlert
	SecretScanningListAlertsForRepo503ApplicationJSONObject *SecretScanningListAlertsForRepo503ApplicationJSON
}
