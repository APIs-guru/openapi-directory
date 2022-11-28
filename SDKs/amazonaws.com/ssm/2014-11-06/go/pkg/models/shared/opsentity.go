package shared

// OpsEntity
// The result of the query.
type OpsEntity struct {
	Data map[string]OpsEntityItem `json:"Data,omitempty"`
	ID   *string                  `json:"Id,omitempty"`
}
