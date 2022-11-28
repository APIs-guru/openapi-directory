package shared

type IssueJobStatusStatusEnum string

const (
	IssueJobStatusStatusEnumAccepted IssueJobStatusStatusEnum = "ACCEPTED"
	IssueJobStatusStatusEnumStarted  IssueJobStatusStatusEnum = "STARTED"
	IssueJobStatusStatusEnumRunning  IssueJobStatusStatusEnum = "RUNNING"
	IssueJobStatusStatusEnumFailure  IssueJobStatusStatusEnum = "FAILURE"
)

// IssueJobStatus
// The status of an import or export job
type IssueJobStatus struct {
	Count  *int64                    `json:"count,omitempty"`
	Pct    *float64                  `json:"pct,omitempty"`
	Phase  *string                   `json:"phase,omitempty"`
	Status *IssueJobStatusStatusEnum `json:"status,omitempty"`
	Total  *int64                    `json:"total,omitempty"`
	Type   *string                   `json:"type,omitempty"`
}
