package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksSetSuitesPreferencesPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks struct {
	AppID   int64 `json:"app_id"`
	Setting bool  `json:"setting"`
}

type ChecksSetSuitesPreferencesRequestBody struct {
	AutoTriggerChecks []ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks `json:"auto_trigger_checks"`
}

type ChecksSetSuitesPreferencesRequest struct {
	PathParams ChecksSetSuitesPreferencesPathParams
	Request    *ChecksSetSuitesPreferencesRequestBody `request:"mediaType=application/json"`
}

type ChecksSetSuitesPreferencesResponse struct {
	ContentType          string
	StatusCode           int64
	CheckSuitePreference *shared.CheckSuitePreference
}
