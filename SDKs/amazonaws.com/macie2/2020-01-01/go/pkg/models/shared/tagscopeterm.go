package shared

// TagScopeTerm
// Specifies a tag-based condition that determines whether an S3 object is included or excluded from a classification job.
type TagScopeTerm struct {
	Comparator *JobComparatorEnum `json:"comparator,omitempty"`
	Key        *string            `json:"key,omitempty"`
	TagValues  []TagValuePair     `json:"tagValues,omitempty"`
	Target     *TagTargetEnum     `json:"target,omitempty"`
}
