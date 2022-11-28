package shared

// CreateWorkloadOutput
// Output of a create workload call.
type CreateWorkloadOutput struct {
	WorkloadArn *string `json:"WorkloadArn,omitempty"`
	WorkloadID  *string `json:"WorkloadId,omitempty"`
}
