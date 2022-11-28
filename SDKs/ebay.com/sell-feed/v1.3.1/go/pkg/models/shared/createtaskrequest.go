package shared

// CreateTaskRequest
// The type that defines the fields for the createTask method.
type CreateTaskRequest struct {
	FeedType      *string `json:"feedType,omitempty"`
	SchemaVersion *string `json:"schemaVersion,omitempty"`
}
