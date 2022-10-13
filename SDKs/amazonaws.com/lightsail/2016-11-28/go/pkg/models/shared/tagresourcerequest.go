package shared

type TagResourceRequest struct {
	ResourceArn  *string `json:"resourceArn"`
	ResourceName string  `json:"resourceName"`
	Tags         []Tag   `json:"tags"`
}
