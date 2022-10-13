package shared

type UntagResourceRequest struct {
	ResourceArn  *string  `json:"resourceArn"`
	ResourceName string   `json:"resourceName"`
	TagKeys      []string `json:"tagKeys"`
}
