package shared

type UpdateImageRequest struct {
	DeleteProperties []string `json:"DeleteProperties"`
	Description      *string  `json:"Description"`
	DisplayName      *string  `json:"DisplayName"`
	ImageName        string   `json:"ImageName"`
	RoleArn          *string  `json:"RoleArn"`
}
