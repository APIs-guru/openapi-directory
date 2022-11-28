package shared

// TagCriterionPairForJob
//
//	<p>Specifies a tag key, a tag value, or a tag key and value (as a pair) to use in a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.</p>
type TagCriterionPairForJob struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
