package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsCreateAuthorizationRequestBody struct {
	ClientID     *string  `json:"client_id,omitempty"`
	ClientSecret *string  `json:"client_secret,omitempty"`
	Fingerprint  *string  `json:"fingerprint,omitempty"`
	Note         *string  `json:"note,omitempty"`
	NoteURL      *string  `json:"note_url,omitempty"`
	Scopes       []string `json:"scopes,omitempty"`
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
