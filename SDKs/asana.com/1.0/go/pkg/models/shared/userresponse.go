package shared

type UserResponsePhoto struct {
	Image1024x1024 *string `json:"image_1024x1024"`
	Image128x128   *string `json:"image_128x128"`
	Image21x21     *string `json:"image_21x21"`
	Image27x27     *string `json:"image_27x27"`
	Image36x36     *string `json:"image_36x36"`
	Image60x60     *string `json:"image_60x60"`
}

type UserResponse struct {
	Email        *string            `json:"email"`
	Gid          *string            `json:"gid"`
	Name         *string            `json:"name"`
	Photo        *UserResponsePhoto `json:"photo"`
	ResourceType *string            `json:"resource_type"`
	Workspaces   []WorkspaceCompact `json:"workspaces"`
}
