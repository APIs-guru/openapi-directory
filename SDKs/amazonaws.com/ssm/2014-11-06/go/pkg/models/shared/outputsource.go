package shared

// OutputSource
// Information about the source where the association execution details are stored.
type OutputSource struct {
	OutputSourceID   *string `json:"OutputSourceId,omitempty"`
	OutputSourceType *string `json:"OutputSourceType,omitempty"`
}
