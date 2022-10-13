package shared

type ServiceMetricsTask struct {
	CompletionDate *string                               `json:"completionDate"`
	CreationDate   *string                               `json:"creationDate"`
	DetailHref     *string                               `json:"detailHref"`
	FeedType       *string                               `json:"feedType"`
	FilterCriteria *CustomerServiceMetricsFilterCriteria `json:"filterCriteria"`
	SchemaVersion  *string                               `json:"schemaVersion"`
	Status         *string                               `json:"status"`
	TaskID         *string                               `json:"taskId"`
}
