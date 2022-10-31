package shared



type InAppCampaignSchedule struct {
    EndDate *string `json:"EndDate,omitempty"`
    EventFilter *CampaignEventFilter `json:"EventFilter,omitempty"`
    QuietTime *QuietTime `json:"QuietTime,omitempty"`
    
}

