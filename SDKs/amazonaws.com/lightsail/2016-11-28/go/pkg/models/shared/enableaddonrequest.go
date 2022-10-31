package shared

type EnableAddOnRequest struct {
	AddOnRequest AddOnRequest `json:"addOnRequest"`
	ResourceName string       `json:"resourceName"`
}
