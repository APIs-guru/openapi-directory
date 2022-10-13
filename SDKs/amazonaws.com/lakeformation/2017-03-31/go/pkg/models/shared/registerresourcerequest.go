package shared

type RegisterResourceRequest struct {
	ResourceArn          string  `json:"ResourceArn"`
	RoleArn              *string `json:"RoleArn"`
	UseServiceLinkedRole *bool   `json:"UseServiceLinkedRole"`
}
