package shared

type SegmentGroupList struct {
	Groups  []SegmentGroup `json:"Groups,omitempty"`
	Include *IncludeEnum   `json:"Include,omitempty"`
}
