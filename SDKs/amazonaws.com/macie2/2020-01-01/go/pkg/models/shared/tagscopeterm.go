package shared

type TagScopeTerm struct {
	Comparator *JobComparatorEnum `json:"comparator,omitempty"`
	Key        *string            `json:"key,omitempty"`
	TagValues  []TagValuePair     `json:"tagValues,omitempty"`
	Target     *TagTargetEnum     `json:"target,omitempty"`
}
