package shared

// GoogleCloudApigeeV1ReportInstanceStatusRequest
// Request for ReportInstanceStatus.
type GoogleCloudApigeeV1ReportInstanceStatusRequest struct {
	InstanceUID *string                             `json:"instanceUid,omitempty"`
	ReportTime  *string                             `json:"reportTime,omitempty"`
	Resources   []GoogleCloudApigeeV1ResourceStatus `json:"resources,omitempty"`
}
