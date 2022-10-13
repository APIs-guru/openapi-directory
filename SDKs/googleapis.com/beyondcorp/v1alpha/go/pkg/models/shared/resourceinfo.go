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
	ID       *string                 `json:"id"`
	Resource map[string]interface{}  `json:"resource"`
	Status   *ResourceInfoStatusEnum `json:"status"`
	Sub      []ResourceInfo          `json:"sub"`
	Time     *string                 `json:"time"`
}
