package shared

type S3BucketCriteriaForJob struct {
	Excludes *CriteriaBlockForJob `json:"excludes"`
	Includes *CriteriaBlockForJob `json:"includes"`
}
