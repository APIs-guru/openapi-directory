package shared

type DisableAddOnRequest struct {
	AddOnType    AddOnTypeEnum `json:"addOnType"`
	ResourceName string        `json:"resourceName"`
}
