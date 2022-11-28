package shared

// GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus
// Represents the Compliance Status of this workload
type GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus struct {
	AcknowledgedViolationCount *int32 `json:"acknowledgedViolationCount,omitempty"`
	ActiveViolationCount       *int32 `json:"activeViolationCount,omitempty"`
}
