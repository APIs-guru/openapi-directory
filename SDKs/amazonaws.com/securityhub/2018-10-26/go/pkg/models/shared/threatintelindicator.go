package shared

type ThreatIntelIndicator struct {
	Category       *ThreatIntelIndicatorCategoryEnum `json:"Category"`
	LastObservedAt *string                           `json:"LastObservedAt"`
	Source         *string                           `json:"Source"`
	SourceURL      *string                           `json:"SourceUrl"`
	Type           *ThreatIntelIndicatorTypeEnum     `json:"Type"`
	Value          *string                           `json:"Value"`
}
