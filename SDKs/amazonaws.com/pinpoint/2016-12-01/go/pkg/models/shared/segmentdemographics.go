package shared

// SegmentDemographics
// Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model.
type SegmentDemographics struct {
	AppVersion *SetDimension `json:"AppVersion,omitempty"`
	Channel    *SetDimension `json:"Channel,omitempty"`
	DeviceType *SetDimension `json:"DeviceType,omitempty"`
	Make       *SetDimension `json:"Make,omitempty"`
	Model      *SetDimension `json:"Model,omitempty"`
	Platform   *SetDimension `json:"Platform,omitempty"`
}
