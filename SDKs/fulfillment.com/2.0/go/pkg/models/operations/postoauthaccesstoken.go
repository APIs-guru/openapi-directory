package operations

import (
	"openapi/pkg/models/shared"
)

type PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum string

const (
	PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnumPassword     PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = "password"
	PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnumRefreshToken PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum = "refresh_token"
)

type PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum string

const (
	PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnumOms PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum = "oms"
)

type PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2 struct {
	ClientID     string                                                               `json:"client_id"`
	ClientSecret string                                                               `json:"client_secret"`
	GrantType    PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum `json:"grant_type"`
	Password     string                                                               `json:"password"`
	Scope        PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum     `json:"scope"`
	Username     string                                                               `json:"username"`
}

type PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV3 struct {
	ClientID     string                                                               `json:"client_id"`
	ClientSecret string                                                               `json:"client_secret"`
	GrantType    PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2GrantTypeEnum `json:"grant_type"`
	RefreshToken string                                                               `json:"refresh_token"`
	Scope        PostOauthAccessTokenRequestBodyAccessTokenRequestBaseV2ScopeEnum     `json:"scope"`
}

type PostOauthAccessTokenAccessTokenResponseV2 struct {
	AccessToken  *string `json:"access_token,omitempty"`
	ExpiresIn    *int64  `json:"expires_in,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	TokenType    *string `json:"token_type,omitempty"`
}

type PostOauthAccessTokenRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostOauthAccessTokenResponse struct {
	AccessTokenResponseV2                                 *PostOauthAccessTokenAccessTokenResponseV2
	ContentType                                           string
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
