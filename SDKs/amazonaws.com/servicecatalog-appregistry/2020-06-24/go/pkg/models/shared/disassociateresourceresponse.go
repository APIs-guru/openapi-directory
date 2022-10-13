package shared

type DisassociateResourceResponse struct {
	ApplicationArn *string `json:"applicationArn"`
	ResourceArn    *string `json:"resourceArn"`
}
