package shared

type GroupCount struct {
	Count    *int64  `json:"count,omitempty"`
	GroupKey *string `json:"groupKey,omitempty"`
}
