package shared

type IssueJobStatusStatusEnum string

const (
	IssueJobStatusStatusEnumAccepted IssueJobStatusStatusEnum = "ACCEPTED"
	IssueJobStatusStatusEnumStarted  IssueJobStatusStatusEnum = "STARTED"
	IssueJobStatusStatusEnumRunning  IssueJobStatusStatusEnum = "RUNNING"
	IssueJobStatusStatusEnumFailure  IssueJobStatusStatusEnum = "FAILURE"
)

type IssueJobStatus struct {
	Count  *int64                    `json:"count"`
	Pct    *float64                  `json:"pct"`
	Phase  *string                   `json:"phase"`
	Status *IssueJobStatusStatusEnum `json:"status"`
	Total  *int64                    `json:"total"`
	Type   *string                   `json:"type"`
}
