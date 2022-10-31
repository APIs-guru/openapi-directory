package shared



type ThreatIntelIndicator struct {
    Category *ThreatIntelIndicatorCategoryEnum `json:"Category,omitempty"`
    LastObservedAt *string `json:"LastObservedAt,omitempty"`
    Source *string `json:"Source,omitempty"`
    SourceURL *string `json:"SourceUrl,omitempty"`
    Type *ThreatIntelIndicatorTypeEnum `json:"Type,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

