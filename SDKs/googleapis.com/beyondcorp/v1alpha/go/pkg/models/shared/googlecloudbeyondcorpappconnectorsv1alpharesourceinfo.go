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
	ID       *string                                                          `json:"id"`
	Resource map[string]interface{}                                           `json:"resource"`
	Status   *GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum `json:"status"`
	Sub      []GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo          `json:"sub"`
	Time     *string                                                          `json:"time"`
}
