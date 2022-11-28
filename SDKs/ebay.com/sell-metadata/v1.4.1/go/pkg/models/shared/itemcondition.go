package shared

// ItemCondition
// Note: In all eBay marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', and not 'Manufacturer Refurbished'. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on any eBay marketplace that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center.
type ItemCondition struct {
	ConditionDescription *string `json:"conditionDescription,omitempty"`
	ConditionID          *string `json:"conditionId,omitempty"`
}
