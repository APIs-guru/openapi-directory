package shared

type GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum string

const (
	GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnumHealthStatusUnspecified GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum = "HEALTH_STATUS_UNSPECIFIED"
	GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnumHealthy                 GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum = "HEALTHY"
	GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnumUnhealthy               GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum = "UNHEALTHY"
	GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnumUnresponsive            GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum = "UNRESPONSIVE"
	GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnumDegraded                GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum = "DEGRADED"
)

type GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo struct {
	ID       *string                                                          `json:"id,omitempty"`
	Resource map[string]interface{}                                           `json:"resource,omitempty"`
	Status   *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum `json:"status,omitempty"`
	Sub      []GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo          `json:"sub,omitempty"`
	Time     *string                                                          `json:"time,omitempty"`
}
