package shared

// Task
// The type that defines the fields for the task details.
type Task struct {
	CompletionDate *string        `json:"completionDate,omitempty"`
	CreationDate   *string        `json:"creationDate,omitempty"`
	DetailHref     *string        `json:"detailHref,omitempty"`
	FeedType       *string        `json:"feedType,omitempty"`
	SchemaVersion  *string        `json:"schemaVersion,omitempty"`
	Status         *string        `json:"status,omitempty"`
	TaskID         *string        `json:"taskId,omitempty"`
	UploadSummary  *UploadSummary `json:"uploadSummary,omitempty"`
}
