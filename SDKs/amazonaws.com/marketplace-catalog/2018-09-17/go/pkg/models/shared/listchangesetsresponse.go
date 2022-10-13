package shared

type ListChangeSetsResponse struct {
	ChangeSetSummaryList []ChangeSetSummaryListItem `json:"ChangeSetSummaryList"`
	NextToken            *string                    `json:"NextToken"`
}
