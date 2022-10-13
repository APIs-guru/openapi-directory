package shared

type UserComment struct {
	AndroidOsVersion *int32          `json:"androidOsVersion"`
	AppVersionCode   *int32          `json:"appVersionCode"`
	AppVersionName   *string         `json:"appVersionName"`
	Device           *string         `json:"device"`
	DeviceMetadata   *DeviceMetadata `json:"deviceMetadata"`
	LastModified     *Timestamp      `json:"lastModified"`
	OriginalText     *string         `json:"originalText"`
	ReviewerLanguage *string         `json:"reviewerLanguage"`
	StarRating       *int32          `json:"starRating"`
	Text             *string         `json:"text"`
	ThumbsDownCount  *int32          `json:"thumbsDownCount"`
	ThumbsUpCount    *int32          `json:"thumbsUpCount"`
}
