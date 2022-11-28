package shared

// UserResponsePhoto
// A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
type UserResponsePhoto struct {
	Image1024x1024 *string `json:"image_1024x1024,omitempty"`
	Image128x128   *string `json:"image_128x128,omitempty"`
	Image21x21     *string `json:"image_21x21,omitempty"`
	Image27x27     *string `json:"image_27x27,omitempty"`
	Image36x36     *string `json:"image_36x36,omitempty"`
	Image60x60     *string `json:"image_60x60,omitempty"`
}

type UserResponse struct {
	Email        *string            `json:"email,omitempty"`
	Gid          *string            `json:"gid,omitempty"`
	Name         *string            `json:"name,omitempty"`
	Photo        *UserResponsePhoto `json:"photo,omitempty"`
	ResourceType *string            `json:"resource_type,omitempty"`
	Workspaces   []WorkspaceCompact `json:"workspaces,omitempty"`
}
