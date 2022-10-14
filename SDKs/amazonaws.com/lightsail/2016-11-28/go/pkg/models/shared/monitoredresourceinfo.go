package shared

type MonitoredResourceInfo struct {
	Arn          *string           `json:"arn,omitempty"`
	Name         *string           `json:"name,omitempty"`
	ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
}
