package shared

type DescribeChangeSetResponse struct {
	ChangeSet          []ChangeSummary   `json:"ChangeSet"`
	ChangeSetArn       *string           `json:"ChangeSetArn"`
	ChangeSetID        *string           `json:"ChangeSetId"`
	ChangeSetName      *string           `json:"ChangeSetName"`
	EndTime            *string           `json:"EndTime"`
	FailureCode        *FailureCodeEnum  `json:"FailureCode"`
	FailureDescription *string           `json:"FailureDescription"`
	StartTime          *string           `json:"StartTime"`
	Status             *ChangeStatusEnum `json:"Status"`
}
