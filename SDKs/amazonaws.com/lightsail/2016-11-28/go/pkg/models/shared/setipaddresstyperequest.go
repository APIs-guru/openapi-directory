package shared

type SetIPAddressTypeRequest struct {
	IPAddressType IPAddressTypeEnum `json:"ipAddressType"`
	ResourceName  string            `json:"resourceName"`
	ResourceType  ResourceTypeEnum  `json:"resourceType"`
}
