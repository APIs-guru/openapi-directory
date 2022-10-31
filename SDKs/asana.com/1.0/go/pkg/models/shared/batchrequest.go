package shared

type BatchRequest struct {
	Actions []BatchRequestAction `json:"actions,omitempty"`
}
