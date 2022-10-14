package shared

type ResourceInfoStatusEnum string

const (
	ResourceInfoStatusEnumHealthStatusUnspecified ResourceInfoStatusEnum = "HEALTH_STATUS_UNSPECIFIED"
	ResourceInfoStatusEnumHealthy                 ResourceInfoStatusEnum = "HEALTHY"
	ResourceInfoStatusEnumUnhealthy               ResourceInfoStatusEnum = "UNHEALTHY"
	ResourceInfoStatusEnumUnresponsive            ResourceInfoStatusEnum = "UNRESPONSIVE"
	ResourceInfoStatusEnumDegraded                ResourceInfoStatusEnum = "DEGRADED"
)

type ResourceInfo struct {
	ID       *string                 `json:"id,omitempty"`
	Resource map[string]interface{}  `json:"resource,omitempty"`
	Status   *ResourceInfoStatusEnum `json:"status,omitempty"`
	Sub      []ResourceInfo          `json:"sub,omitempty"`
	Time     *string                 `json:"time,omitempty"`
}
