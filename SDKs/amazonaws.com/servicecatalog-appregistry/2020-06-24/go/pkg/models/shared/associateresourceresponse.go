package shared

type AssociateResourceResponse struct {
	ApplicationArn *string `json:"applicationArn,omitempty"`
	ResourceArn    *string `json:"resourceArn,omitempty"`
}
