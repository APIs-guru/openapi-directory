package shared

type CreateImageRequest struct {
	Description *string `json:"Description,omitempty"`
	DisplayName *string `json:"DisplayName,omitempty"`
	ImageName   string  `json:"ImageName"`
	RoleArn     string  `json:"RoleArn"`
	Tags        []Tag   `json:"Tags,omitempty"`
}
