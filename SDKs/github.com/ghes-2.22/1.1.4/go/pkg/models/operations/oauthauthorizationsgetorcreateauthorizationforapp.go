package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams struct {
	ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody struct {
	ClientSecret string   `json:"client_secret"`
	Fingerprint  *string  `json:"fingerprint,omitempty"`
	Note         *string  `json:"note,omitempty"`
	NoteURL      *string  `json:"note_url,omitempty"`
	Scopes       []string `json:"scopes,omitempty"`
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
