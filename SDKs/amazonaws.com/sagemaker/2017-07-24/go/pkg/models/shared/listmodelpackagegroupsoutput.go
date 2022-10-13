package shared

type ListModelPackageGroupsOutput struct {
	ModelPackageGroupSummaryList []ModelPackageGroupSummary `json:"ModelPackageGroupSummaryList"`
	NextToken                    *string                    `json:"NextToken"`
}
