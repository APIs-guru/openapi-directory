package shared

type TagScopeTerm struct {
	Comparator *JobComparatorEnum `json:"comparator"`
	Key        *string            `json:"key"`
	TagValues  []TagValuePair     `json:"tagValues"`
	Target     *TagTargetEnum     `json:"target"`
}
