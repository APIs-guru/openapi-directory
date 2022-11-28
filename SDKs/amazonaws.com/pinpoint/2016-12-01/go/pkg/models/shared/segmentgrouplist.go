package shared

// SegmentGroupList
// Specifies the settings that define the relationships between segment groups for a segment.
type SegmentGroupList struct {
	Groups  []SegmentGroup `json:"Groups,omitempty"`
	Include *IncludeEnum   `json:"Include,omitempty"`
}
