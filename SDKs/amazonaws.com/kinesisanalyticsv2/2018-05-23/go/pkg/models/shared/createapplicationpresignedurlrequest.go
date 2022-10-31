package shared



type CreateApplicationPresignedURLRequest struct {
    ApplicationName string `json:"ApplicationName"`
    SessionExpirationDurationInSeconds *int64 `json:"SessionExpirationDurationInSeconds,omitempty"`
    URLType URLTypeEnum `json:"UrlType"`
    
}

