package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsSetLfsPreferencePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsSetLfsPreferenceRequestBodyUseLfsEnum string

const (
	MigrationsSetLfsPreferenceRequestBodyUseLfsEnumOptIn  MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = "opt_in"
	MigrationsSetLfsPreferenceRequestBodyUseLfsEnumOptOut MigrationsSetLfsPreferenceRequestBodyUseLfsEnum = "opt_out"
)

type MigrationsSetLfsPreferenceRequestBody struct {
	UseLfs MigrationsSetLfsPreferenceRequestBodyUseLfsEnum `json:"use_lfs"`
}

type MigrationsSetLfsPreferenceRequest struct {
	PathParams MigrationsSetLfsPreferencePathParams
	Request    *MigrationsSetLfsPreferenceRequestBody `request:"mediaType=application/json"`
}

type MigrationsSetLfsPreferenceResponse struct {
	ContentType     string
	StatusCode      int64
	Import          *shared.Import
	ValidationError *shared.ValidationError
}
