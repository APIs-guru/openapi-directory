package shared

type SegmentGroupList struct {
	Groups  []SegmentGroup `json:"Groups"`
	Include *IncludeEnum   `json:"Include"`
}
