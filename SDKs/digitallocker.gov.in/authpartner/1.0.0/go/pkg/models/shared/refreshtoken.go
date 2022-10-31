package shared




type RefreshTokenGrantTypeEnum string

const (
    RefreshTokenGrantTypeEnumRefreshToken RefreshTokenGrantTypeEnum = "refresh_token"
)


type RefreshToken struct {
    ClientID string `json:"client_id"`
    ClientSecret string `json:"client_secret"`
    GrantType RefreshTokenGrantTypeEnum `json:"grant_type"`
    RefreshToken string `json:"refresh_token"`
    
}

