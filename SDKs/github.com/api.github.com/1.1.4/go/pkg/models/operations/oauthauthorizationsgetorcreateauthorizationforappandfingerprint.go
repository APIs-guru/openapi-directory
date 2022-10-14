package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams struct {
	ClientID    string `pathParam:"style=simple,explode=false,name=client_id"`
	Fingerprint string `pathParam:"style=simple,explode=false,name=fingerprint"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody struct {
	ClientSecret string   `json:"client_secret"`
	Note         *string  `json:"note,omitempty"`
	NoteURL      *string  `json:"note_url,omitempty"`
	Scopes       []string `json:"scopes,omitempty"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest struct {
	PathParams OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams
	Request    *OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody `request:"mediaType=application/json"`
}

type OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	Authorization   *shared.Authorization
	ValidationError *shared.ValidationError
}
