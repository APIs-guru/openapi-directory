package shared



type UsageStatisticsFilter struct {
    Comparator *UsageStatisticsFilterComparatorEnum `json:"comparator,omitempty"`
    Key *UsageStatisticsFilterKeyEnum `json:"key,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

