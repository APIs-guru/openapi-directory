package shared

type DescribeChangeSetResponse struct {
	ChangeSet          []ChangeSummary   `json:"ChangeSet,omitempty"`
	ChangeSetArn       *string           `json:"ChangeSetArn,omitempty"`
	ChangeSetID        *string           `json:"ChangeSetId,omitempty"`
	ChangeSetName      *string           `json:"ChangeSetName,omitempty"`
	EndTime            *string           `json:"EndTime,omitempty"`
	FailureCode        *FailureCodeEnum  `json:"FailureCode,omitempty"`
	FailureDescription *string           `json:"FailureDescription,omitempty"`
	StartTime          *string           `json:"StartTime,omitempty"`
	Status             *ChangeStatusEnum `json:"Status,omitempty"`
}
