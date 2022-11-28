package shared

type UserComment struct {
	AndroidOsVersion *int32
	AppVersionCode   *int32
	AppVersionName   *string
	Device           *string
	DeviceMetadata   *DeviceMetadata
	LastModified     *Timestamp
	OriginalText     *string
	ReviewerLanguage *string
	StarRating       *int32
	Text             *string
	ThumbsDownCount  *int32
	ThumbsUpCount    *int32
}
