package shared

type WeeklyAutoScalingSchedule struct {
	Friday    map[string]string `json:"Friday"`
	Monday    map[string]string `json:"Monday"`
	Saturday  map[string]string `json:"Saturday"`
	Sunday    map[string]string `json:"Sunday"`
	Thursday  map[string]string `json:"Thursday"`
	Tuesday   map[string]string `json:"Tuesday"`
	Wednesday map[string]string `json:"Wednesday"`
}
