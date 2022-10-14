package shared

type InventoryFilterCriteria struct {
	CreationDateRange *DateRange `json:"creationDateRange,omitempty"`
	ListingFormat     *string    `json:"listingFormat,omitempty"`
	ListingStatus     *string    `json:"listingStatus,omitempty"`
	ModifiedDateRange *DateRange `json:"modifiedDateRange,omitempty"`
}
