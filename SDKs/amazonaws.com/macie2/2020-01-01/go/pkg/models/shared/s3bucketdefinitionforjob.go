package shared

// S3BucketDefinitionForJob
// Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
type S3BucketDefinitionForJob struct {
	AccountID string   `json:"accountId"`
	Buckets   []string `json:"buckets"`
}
