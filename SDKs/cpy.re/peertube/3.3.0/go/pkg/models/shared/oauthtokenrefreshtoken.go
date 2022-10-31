package shared




type OAuthTokenRefreshTokenGrantTypeEnum string

const (
    OAuthTokenRefreshTokenGrantTypeEnumPassword OAuthTokenRefreshTokenGrantTypeEnum = "password"
OAuthTokenRefreshTokenGrantTypeEnumRefreshToken OAuthTokenRefreshTokenGrantTypeEnum = "refresh_token"
)


type OAuthTokenRefreshToken struct {
    ClientID string `form:"name=client_id"`
    ClientSecret string `form:"name=client_secret"`
    GrantType OAuthTokenRefreshTokenGrantTypeEnum `form:"name=grant_type"`
    RefreshToken string `form:"name=refresh_token"`
    
}

