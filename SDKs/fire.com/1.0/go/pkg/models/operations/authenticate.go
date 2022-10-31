package operations

import (
"time")


type AuthenticateAuthenticationGrantTypeEnum string

const (
    AuthenticateAuthenticationGrantTypeEnumAccessToken AuthenticateAuthenticationGrantTypeEnum = "AccessToken"
)


type AuthenticateAuthentication struct {
    ClientID *string `json:"clientId,omitempty"`
    ClientSecret *string `json:"clientSecret,omitempty"`
    GrantType *AuthenticateAuthenticationGrantTypeEnum `json:"grantType,omitempty"`
    Nonce *int64 `json:"nonce,omitempty"`
    RefreshToken *string `json:"refreshToken,omitempty"`
    
}

type AuthenticateRequest struct {
    Request AuthenticateAuthentication `request:"mediaType=application/json"`
    
}

type AuthenticateAccessToken struct {
    AccessToken *string `json:"accessToken,omitempty"`
    APIApplicationID *int64 `json:"apiApplicationId,omitempty"`
    BusinessID *int64 `json:"businessId,omitempty"`
    Expiry *time.Time `json:"expiry,omitempty"`
    Permissions []string `json:"permissions,omitempty"`
    
}

type AuthenticateResponse struct {
    AccessToken *AuthenticateAccessToken 
    ContentType string 
    StatusCode int64 
    
}

