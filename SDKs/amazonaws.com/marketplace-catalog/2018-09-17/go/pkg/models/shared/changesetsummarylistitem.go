package shared

type ChangeSetSummaryListItem struct {
	ChangeSetArn  *string           `json:"ChangeSetArn,omitempty"`
	ChangeSetID   *string           `json:"ChangeSetId,omitempty"`
	ChangeSetName *string           `json:"ChangeSetName,omitempty"`
	EndTime       *string           `json:"EndTime,omitempty"`
	EntityIDList  []string          `json:"EntityIdList,omitempty"`
	FailureCode   *FailureCodeEnum  `json:"FailureCode,omitempty"`
	StartTime     *string           `json:"StartTime,omitempty"`
	Status        *ChangeStatusEnum `json:"Status,omitempty"`
}
