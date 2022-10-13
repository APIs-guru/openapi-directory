package shared

type OrderTask struct {
	CompletionDate *string              `json:"completionDate"`
	CreationDate   *string              `json:"creationDate"`
	DetailHref     *string              `json:"detailHref"`
	FeedType       *string              `json:"feedType"`
	FilterCriteria *OrderFilterCriteria `json:"filterCriteria"`
	SchemaVersion  *string              `json:"schemaVersion"`
	Status         *string              `json:"status"`
	TaskID         *string              `json:"taskId"`
	UploadSummary  *UploadSummary       `json:"uploadSummary"`
}
