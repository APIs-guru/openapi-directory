package shared

type DescribeAccountModificationsResult struct {
	AccountModifications []AccountModification `json:"AccountModifications"`
	NextToken            *string               `json:"NextToken"`
}
