package shared

type SegmentDimensions struct {
	Attributes     map[string]AttributeDimension `json:"Attributes,omitempty"`
	Behavior       *SegmentBehaviors             `json:"Behavior,omitempty"`
	Demographic    *SegmentDemographics          `json:"Demographic,omitempty"`
	Location       *SegmentLocation              `json:"Location,omitempty"`
	Metrics        map[string]MetricDimension    `json:"Metrics,omitempty"`
	UserAttributes map[string]AttributeDimension `json:"UserAttributes,omitempty"`
}
