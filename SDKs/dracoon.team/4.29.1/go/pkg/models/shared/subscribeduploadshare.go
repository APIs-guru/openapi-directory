package shared

// SubscribedUploadShare
// Subscribed upload share information
type SubscribedUploadShare struct {
	ID           int64  `json:"id"`
	TargetNodeID *int64 `json:"targetNodeId,omitempty"`
}
