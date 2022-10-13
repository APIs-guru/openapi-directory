package shared

type MonitoredResourceInfo struct {
	Arn          *string           `json:"arn"`
	Name         *string           `json:"name"`
	ResourceType *ResourceTypeEnum `json:"resourceType"`
}
