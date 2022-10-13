package shared

type CreateTaskRequest struct {
	FeedType      *string `json:"feedType"`
	SchemaVersion *string `json:"schemaVersion"`
}
