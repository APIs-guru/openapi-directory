package shared

type ChangeSetSummaryListItem struct {
	ChangeSetArn  *string           `json:"ChangeSetArn"`
	ChangeSetID   *string           `json:"ChangeSetId"`
	ChangeSetName *string           `json:"ChangeSetName"`
	EndTime       *string           `json:"EndTime"`
	EntityIDList  []string          `json:"EntityIdList"`
	FailureCode   *FailureCodeEnum  `json:"FailureCode"`
	StartTime     *string           `json:"StartTime"`
	Status        *ChangeStatusEnum `json:"Status"`
}
