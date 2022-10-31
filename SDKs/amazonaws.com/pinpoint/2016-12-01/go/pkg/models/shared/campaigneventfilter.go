package shared



type CampaignEventFilter struct {
    Dimensions EventDimensions `json:"Dimensions"`
    FilterType FilterTypeEnum `json:"FilterType"`
    
}

