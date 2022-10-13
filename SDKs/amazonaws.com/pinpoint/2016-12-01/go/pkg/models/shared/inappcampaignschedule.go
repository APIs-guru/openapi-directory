package shared

type InAppCampaignSchedule struct {
	EndDate     *string              `json:"EndDate"`
	EventFilter *CampaignEventFilter `json:"EventFilter"`
	QuietTime   *QuietTime           `json:"QuietTime"`
}
