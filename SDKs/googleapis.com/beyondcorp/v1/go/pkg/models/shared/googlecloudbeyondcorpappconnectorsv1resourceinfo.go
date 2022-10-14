package shared

type GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum string

const (
	GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumHealthStatusUnspecified GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = "HEALTH_STATUS_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumHealthy                 GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = "HEALTHY"
	GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumUnhealthy               GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = "UNHEALTHY"
	GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumUnresponsive            GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = "UNRESPONSIVE"
	GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnumDegraded                GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum = "DEGRADED"
)

type GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo struct {
	ID       *string                                                     `json:"id,omitempty"`
	Resource map[string]interface{}                                      `json:"resource,omitempty"`
	Status   *GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum `json:"status,omitempty"`
	Sub      []GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo          `json:"sub,omitempty"`
	Time     *string                                                     `json:"time,omitempty"`
}
