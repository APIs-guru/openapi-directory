package shared

// BatchRequest
// A request object for use in a batch request.
type BatchRequest struct {
	Actions []BatchRequestAction `json:"actions,omitempty"`
}
