package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenRevocationIDRequestBodyTokenTypeHintEnum string

const (
	GetTokenRevocationIDRequestBodyTokenTypeHintEnumRefreshToken GetTokenRevocationIDRequestBodyTokenTypeHintEnum = "refresh_token"
	GetTokenRevocationIDRequestBodyTokenTypeHintEnumAccessToken  GetTokenRevocationIDRequestBodyTokenTypeHintEnum = "access_token"
)

type GetTokenRevocationIDRequestBody struct {
	Token         string                                            `json:"token"`
	TokenTypeHint *GetTokenRevocationIDRequestBodyTokenTypeHintEnum `json:"token_type_hint,omitempty"`
}

type GetTokenRevocationIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type GetTokenRevocationIDRequest struct {
	Request  *GetTokenRevocationIDRequestBody `request:"mediaType=application/json"`
	Security GetTokenRevocationIDSecurity
}

type GetTokenRevocationIDResponse struct {
	ContentType string
	StatusCode  int64
}
