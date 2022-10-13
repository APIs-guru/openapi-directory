package shared

type GoogleCloudApigeeV1ReportInstanceStatusRequest struct {
	InstanceUID *string                             `json:"instanceUid"`
	ReportTime  *string                             `json:"reportTime"`
	Resources   []GoogleCloudApigeeV1ResourceStatus `json:"resources"`
}
