package shared

type Schedule struct {
	EndTime     *string              `json:"EndTime"`
	EventFilter *CampaignEventFilter `json:"EventFilter"`
	Frequency   *FrequencyEnum       `json:"Frequency"`
	IsLocalTime *bool                `json:"IsLocalTime"`
	QuietTime   *QuietTime           `json:"QuietTime"`
	StartTime   string               `json:"StartTime"`
	Timezone    *string              `json:"Timezone"`
}
