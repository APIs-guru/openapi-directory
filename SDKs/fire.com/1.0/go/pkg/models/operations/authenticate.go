package operations

import (
	"time"
)

type AuthenticateRequestBodyGrantTypeEnum string

const (
	AuthenticateRequestBodyGrantTypeEnumAccessToken AuthenticateRequestBodyGrantTypeEnum = "AccessToken"
)

type AuthenticateRequestBodyAuthentication struct {
	ClientID     *string                               `json:"clientId"`
	ClientSecret *string                               `json:"clientSecret"`
	GrantType    *AuthenticateRequestBodyGrantTypeEnum `json:"grantType"`
	Nonce        *int64                                `json:"nonce"`
	RefreshToken *string                               `json:"refreshToken"`
}

type AuthenticateRequest struct {
	Request AuthenticateRequestBodyAuthentication `request:"mediaType=application/json"`
}

type Authenticate200ApplicationJSONAccessToken struct {
	AccessToken      *string    `json:"accessToken"`
	APIApplicationID *int64     `json:"apiApplicationId"`
	BusinessID       *int64     `json:"businessId"`
	Expiry           *time.Time `json:"expiry"`
	Permissions      []string   `json:"permissions"`
}

type AuthenticateResponse struct {
	AccessToken *Authenticate200ApplicationJSONAccessToken
	ContentType string
	StatusCode  int64
}
