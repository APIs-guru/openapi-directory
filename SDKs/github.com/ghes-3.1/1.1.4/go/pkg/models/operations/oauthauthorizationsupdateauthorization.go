package operations

import (
	"openapi/pkg/models/shared"
)

type OauthAuthorizationsUpdateAuthorizationPathParams struct {
	AuthorizationID int64 `pathParam:"style=simple,explode=false,name=authorization_id"`
}

type OauthAuthorizationsUpdateAuthorizationRequestBody struct {
	AddScopes    []string `json:"add_scopes"`
	Fingerprint  *string  `json:"fingerprint"`
	Note         *string  `json:"note"`
	NoteURL      *string  `json:"note_url"`
	RemoveScopes []string `json:"remove_scopes"`
	Scopes       []string `json:"scopes"`
}

type OauthAuthorizationsUpdateAuthorizationRequest struct {
	PathParams OauthAuthorizationsUpdateAuthorizationPathParams
	Request    *OauthAuthorizationsUpdateAuthorizationRequestBody `request:"mediaType=application/json"`
}

type OauthAuthorizationsUpdateAuthorizationResponse struct {
	ContentType     string
	StatusCode      int64
	Authorization   *shared.Authorization
	ValidationError *shared.ValidationError
}
