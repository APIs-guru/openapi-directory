package shared

type GetOperationsForResourceRequest struct {
	PageToken    *string `json:"pageToken"`
	ResourceName string  `json:"resourceName"`
}
