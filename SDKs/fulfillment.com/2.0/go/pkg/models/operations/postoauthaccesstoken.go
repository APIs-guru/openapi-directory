package operations

import (
	"openapi/pkg/models/shared"
)

type PostOauthAccessTokenRequestBody1GrantTypeEnum string

const (
	PostOauthAccessTokenRequestBody1GrantTypeEnumPassword     PostOauthAccessTokenRequestBody1GrantTypeEnum = "password"
	PostOauthAccessTokenRequestBody1GrantTypeEnumRefreshToken PostOauthAccessTokenRequestBody1GrantTypeEnum = "refresh_token"
)

type PostOauthAccessTokenRequestBody1ScopeEnum string

const (
	PostOauthAccessTokenRequestBody1ScopeEnumOms PostOauthAccessTokenRequestBody1ScopeEnum = "oms"
)

type PostOauthAccessTokenRequestBody1AccessTokenRequestBaseV2 struct {
	ClientID     string                                        `json:"client_id"`
	ClientSecret string                                        `json:"client_secret"`
	GrantType    PostOauthAccessTokenRequestBody1GrantTypeEnum `json:"grant_type"`
	Password     string                                        `json:"password"`
	Scope        PostOauthAccessTokenRequestBody1ScopeEnum     `json:"scope"`
	Username     string                                        `json:"username"`
}

type PostOauthAccessTokenRequestBody2GrantTypeEnum string

const (
	PostOauthAccessTokenRequestBody2GrantTypeEnumPassword     PostOauthAccessTokenRequestBody2GrantTypeEnum = "password"
	PostOauthAccessTokenRequestBody2GrantTypeEnumRefreshToken PostOauthAccessTokenRequestBody2GrantTypeEnum = "refresh_token"
)

type PostOauthAccessTokenRequestBody2ScopeEnum string

const (
	PostOauthAccessTokenRequestBody2ScopeEnumOms PostOauthAccessTokenRequestBody2ScopeEnum = "oms"
)

type PostOauthAccessTokenRequestBody2AccessTokenRequestBaseV2 struct {
	ClientID     string                                        `json:"client_id"`
	ClientSecret string                                        `json:"client_secret"`
	GrantType    PostOauthAccessTokenRequestBody2GrantTypeEnum `json:"grant_type"`
	RefreshToken string                                        `json:"refresh_token"`
	Scope        PostOauthAccessTokenRequestBody2ScopeEnum     `json:"scope"`
}

type PostOauthAccessTokenRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type PostOauthAccessToken200ApplicationJSONAccessTokenResponseV2 struct {
	AccessToken  *string `json:"access_token,omitempty"`
	ExpiresIn    *int64  `json:"expires_in,omitempty"`
	RefreshToken *string `json:"refresh_token,omitempty"`
	TokenType    *string `json:"token_type,omitempty"`
}

type PostOauthAccessTokenResponse struct {
	AccessTokenResponseV2                                 *PostOauthAccessToken200ApplicationJSONAccessTokenResponseV2
	ContentType                                           string
	StatusCode                                            int64
	OneordersGetResponses404ContentApplication1jsonSchema *shared.OneordersGetResponses404ContentApplication1jsonSchema
}
