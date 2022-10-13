package shared

type SegmentDemographics struct {
	AppVersion *SetDimension `json:"AppVersion"`
	Channel    *SetDimension `json:"Channel"`
	DeviceType *SetDimension `json:"DeviceType"`
	Make       *SetDimension `json:"Make"`
	Model      *SetDimension `json:"Model"`
	Platform   *SetDimension `json:"Platform"`
}
