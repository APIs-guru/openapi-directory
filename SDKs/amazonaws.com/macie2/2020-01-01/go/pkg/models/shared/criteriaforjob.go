package shared

type CriteriaForJob struct {
	SimpleCriterion *SimpleCriterionForJob `json:"simpleCriterion"`
	TagCriterion    *TagCriterionForJob    `json:"tagCriterion"`
}
