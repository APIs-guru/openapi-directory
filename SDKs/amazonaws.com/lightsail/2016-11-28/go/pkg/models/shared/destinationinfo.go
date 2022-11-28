package shared

// DestinationInfo
// Describes the destination of a record.
type DestinationInfo struct {
	ID      *string `json:"id,omitempty"`
	Service *string `json:"service,omitempty"`
}
