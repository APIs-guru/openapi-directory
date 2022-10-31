package shared



type CriteriaForJob struct {
    SimpleCriterion *SimpleCriterionForJob `json:"simpleCriterion,omitempty"`
    TagCriterion *TagCriterionForJob `json:"tagCriterion,omitempty"`
    
}

