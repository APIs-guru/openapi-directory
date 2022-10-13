package shared

type SegmentDimensions struct {
	Attributes     map[string]AttributeDimension `json:"Attributes"`
	Behavior       *SegmentBehaviors             `json:"Behavior"`
	Demographic    *SegmentDemographics          `json:"Demographic"`
	Location       *SegmentLocation              `json:"Location"`
	Metrics        map[string]MetricDimension    `json:"Metrics"`
	UserAttributes map[string]AttributeDimension `json:"UserAttributes"`
}
