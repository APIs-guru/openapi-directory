package shared

type RecencyDimension struct {
	Duration    DurationEnum    `json:"Duration"`
	RecencyType RecencyTypeEnum `json:"RecencyType"`
}
