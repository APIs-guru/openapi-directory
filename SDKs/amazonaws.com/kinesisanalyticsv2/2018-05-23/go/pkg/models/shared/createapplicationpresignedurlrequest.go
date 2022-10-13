package shared

type CreateApplicationPresignedURLRequest struct {
	ApplicationName                    string      `json:"ApplicationName"`
	SessionExpirationDurationInSeconds *int64      `json:"SessionExpirationDurationInSeconds"`
	URLType                            URLTypeEnum `json:"UrlType"`
}
