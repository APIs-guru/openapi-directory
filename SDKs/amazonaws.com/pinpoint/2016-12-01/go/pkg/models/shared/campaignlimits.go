package shared



type CampaignLimits struct {
    Daily *int64 `json:"Daily,omitempty"`
    MaximumDuration *int64 `json:"MaximumDuration,omitempty"`
    MessagesPerSecond *int64 `json:"MessagesPerSecond,omitempty"`
    Session *int64 `json:"Session,omitempty"`
    Total *int64 `json:"Total,omitempty"`
    
}

