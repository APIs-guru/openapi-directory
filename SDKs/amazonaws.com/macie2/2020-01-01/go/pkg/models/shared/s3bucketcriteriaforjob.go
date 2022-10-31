package shared



type S3BucketCriteriaForJob struct {
    Excludes *CriteriaBlockForJob `json:"excludes,omitempty"`
    Includes *CriteriaBlockForJob `json:"includes,omitempty"`
    
}

