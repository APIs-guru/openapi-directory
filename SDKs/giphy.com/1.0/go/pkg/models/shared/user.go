package shared

// User
// The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
type User struct {
	AvatarURL   *string `json:"avatar_url,omitempty"`
	BannerURL   *string `json:"banner_url,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	ProfileURL  *string `json:"profile_url,omitempty"`
	Twitter     *string `json:"twitter,omitempty"`
	Username    *string `json:"username,omitempty"`
}
