package shared

type SplitCapacityCommitmentResponse struct {
	First  *CapacityCommitment `json:"first"`
	Second *CapacityCommitment `json:"second"`
}
