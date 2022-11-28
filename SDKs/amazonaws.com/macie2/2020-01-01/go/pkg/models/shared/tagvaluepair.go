package shared

// TagValuePair
// Specifies a tag key or tag key and value pair to use in a tag-based condition that determines whether an S3 object is included or excluded from a classification job. Tag keys and values are case sensitive. Also, Amazon Macie doesn't support use of partial values or wildcard characters in tag-based conditions.
type TagValuePair struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}
