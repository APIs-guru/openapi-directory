package shared



type ListLongTermPricingResult struct {
    LongTermPricingEntries []LongTermPricingListEntry `json:"LongTermPricingEntries,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

