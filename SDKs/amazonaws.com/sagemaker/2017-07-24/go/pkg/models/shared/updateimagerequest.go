package shared

type UpdateImageRequest struct {
	DeleteProperties []string `json:"DeleteProperties,omitempty"`
	Description      *string  `json:"Description,omitempty"`
	DisplayName      *string  `json:"DisplayName,omitempty"`
	ImageName        string   `json:"ImageName"`
	RoleArn          *string  `json:"RoleArn,omitempty"`
}
