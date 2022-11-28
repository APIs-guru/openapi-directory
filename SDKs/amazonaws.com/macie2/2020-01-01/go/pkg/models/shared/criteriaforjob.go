package shared

// CriteriaForJob
// Specifies a property- or tag-based condition that defines criteria for including or excluding S3 buckets from a classification job.
type CriteriaForJob struct {
	SimpleCriterion *SimpleCriterionForJob `json:"simpleCriterion,omitempty"`
	TagCriterion    *TagCriterionForJob    `json:"tagCriterion,omitempty"`
}
