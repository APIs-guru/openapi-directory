package shared

type GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus struct {
	AcknowledgedViolationCount *int32 `json:"acknowledgedViolationCount,omitempty"`
	ActiveViolationCount       *int32 `json:"activeViolationCount,omitempty"`
}
