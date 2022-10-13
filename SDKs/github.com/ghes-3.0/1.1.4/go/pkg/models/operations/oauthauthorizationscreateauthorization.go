package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsCreateAuthorizationRequestBody struct {
	ClientID     *string  `json:"client_id"`
	ClientSecret *string  `json:"client_secret"`
	Fingerprint  *string  `json:"fingerprint"`
	Note         *string  `json:"note"`
	NoteURL      *string  `json:"note_url"`
	Scopes       []string `json:"scopes"`
}

type OauthAuthorizationsCreateAuthorizationRequest struct {
	Request *OauthAuthorizationsCreateAuthorizationRequestBody `request:"mediaType=application/json"`
}

type OauthAuthorizationsCreateAuthorizationResponse struct {
	ContentType     string
	Headers         map[string][]string
	StatusCode      int64
	Authorization   *shared.Authorization
	BasicError      *shared.BasicError
	ValidationError *shared.ValidationError
}
