package shared

type CreateImageRequest struct {
	Description *string `json:"Description"`
	DisplayName *string `json:"DisplayName"`
	ImageName   string  `json:"ImageName"`
	RoleArn     string  `json:"RoleArn"`
	Tags        []Tag   `json:"Tags"`
}
