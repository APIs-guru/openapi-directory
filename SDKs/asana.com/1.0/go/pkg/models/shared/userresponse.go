package shared

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
