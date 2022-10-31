package shared

type UpdateResourceRequest struct {
	ResourceArn string `json:"ResourceArn"`
	RoleArn     string `json:"RoleArn"`
}
