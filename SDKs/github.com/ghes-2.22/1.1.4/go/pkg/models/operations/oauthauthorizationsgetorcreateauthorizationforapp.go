package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody struct {
	ClientSecret string   `json:"client_secret"`
	Fingerprint  *string  `json:"fingerprint"`
	Note         *string  `json:"note"`
	NoteURL      *string  `json:"note_url"`
	Scopes       []string `json:"scopes"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppRequest struct {
	PathParams OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams
	Request    *OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody `request:"mediaType=application/json"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	Authorization   *shared.Authorization
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
