package shared

// UserComment
// User entry from conversation between user and developer.
type UserComment struct {
	AndroidOsVersion *int32          `json:"androidOsVersion,omitempty"`
	AppVersionCode   *int32          `json:"appVersionCode,omitempty"`
	AppVersionName   *string         `json:"appVersionName,omitempty"`
	Device           *string         `json:"device,omitempty"`
	DeviceMetadata   *DeviceMetadata `json:"deviceMetadata,omitempty"`
	LastModified     *Timestamp      `json:"lastModified,omitempty"`
	OriginalText     *string         `json:"originalText,omitempty"`
	ReviewerLanguage *string         `json:"reviewerLanguage,omitempty"`
	StarRating       *int32          `json:"starRating,omitempty"`
	Text             *string         `json:"text,omitempty"`
	ThumbsDownCount  *int32          `json:"thumbsDownCount,omitempty"`
	ThumbsUpCount    *int32          `json:"thumbsUpCount,omitempty"`
}
