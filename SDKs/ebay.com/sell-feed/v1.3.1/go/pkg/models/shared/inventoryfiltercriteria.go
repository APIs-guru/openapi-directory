package shared

type InventoryFilterCriteria struct {
	CreationDateRange *DateRange `json:"creationDateRange"`
	ListingFormat     *string    `json:"listingFormat"`
	ListingStatus     *string    `json:"listingStatus"`
	ModifiedDateRange *DateRange `json:"modifiedDateRange"`
}
