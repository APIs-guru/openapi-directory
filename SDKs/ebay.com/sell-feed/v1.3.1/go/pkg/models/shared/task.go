package shared

type Task struct {
	CompletionDate *string        `json:"completionDate"`
	CreationDate   *string        `json:"creationDate"`
	DetailHref     *string        `json:"detailHref"`
	FeedType       *string        `json:"feedType"`
	SchemaVersion  *string        `json:"schemaVersion"`
	Status         *string        `json:"status"`
	TaskID         *string        `json:"taskId"`
	UploadSummary  *UploadSummary `json:"uploadSummary"`
}
