package shared

type SegmentDemographics struct {
	AppVersion *SetDimension `json:"AppVersion,omitempty"`
	Channel    *SetDimension `json:"Channel,omitempty"`
	DeviceType *SetDimension `json:"DeviceType,omitempty"`
	Make       *SetDimension `json:"Make,omitempty"`
	Model      *SetDimension `json:"Model,omitempty"`
	Platform   *SetDimension `json:"Platform,omitempty"`
}
