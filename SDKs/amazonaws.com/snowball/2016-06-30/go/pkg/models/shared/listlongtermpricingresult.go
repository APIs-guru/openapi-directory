package shared

type ListLongTermPricingResult struct {
	LongTermPricingEntries []LongTermPricingListEntry `json:"LongTermPricingEntries"`
	NextToken              *string                    `json:"NextToken"`
}
