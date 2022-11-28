package shared

// GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus
// Represents the Compliance Status of this workload
type GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus struct {
	AcknowledgedViolationCount *int32 `json:"acknowledgedViolationCount,omitempty"`
	ActiveViolationCount       *int32 `json:"activeViolationCount,omitempty"`
}
