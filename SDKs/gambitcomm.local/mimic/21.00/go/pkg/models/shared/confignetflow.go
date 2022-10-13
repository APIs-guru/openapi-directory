package shared

type ConfigNetflow struct {
	Bundleflowsets *int32  `json:"bundleflowsets"`
	Collector      *string `json:"collector"`
	Collectorport  *int32  `json:"collectorport"`
	Filename       *string `json:"filename"`
}
