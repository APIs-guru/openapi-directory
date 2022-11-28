package shared

// AddRegionAction
// Defines the Region and KMS key to add to the replication set.
type AddRegionAction struct {
	RegionName  string  `json:"regionName"`
	SseKmsKeyID *string `json:"sseKmsKeyId,omitempty"`
}
