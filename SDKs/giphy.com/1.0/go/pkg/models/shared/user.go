package shared

type User struct {
	AvatarURL   *string `json:"avatar_url"`
	BannerURL   *string `json:"banner_url"`
	DisplayName *string `json:"display_name"`
	ProfileURL  *string `json:"profile_url"`
	Twitter     *string `json:"twitter"`
	Username    *string `json:"username"`
}
