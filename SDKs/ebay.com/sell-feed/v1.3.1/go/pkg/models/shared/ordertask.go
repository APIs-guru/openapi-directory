package shared

// OrderTask
// The type that defines the fields for the getOrderTask response.
type OrderTask struct {
	CompletionDate *string              `json:"completionDate,omitempty"`
	CreationDate   *string              `json:"creationDate,omitempty"`
	DetailHref     *string              `json:"detailHref,omitempty"`
	FeedType       *string              `json:"feedType,omitempty"`
	FilterCriteria *OrderFilterCriteria `json:"filterCriteria,omitempty"`
	SchemaVersion  *string              `json:"schemaVersion,omitempty"`
	Status         *string              `json:"status,omitempty"`
	TaskID         *string              `json:"taskId,omitempty"`
	UploadSummary  *UploadSummary       `json:"uploadSummary,omitempty"`
}
