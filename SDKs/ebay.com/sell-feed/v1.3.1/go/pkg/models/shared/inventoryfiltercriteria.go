package shared

// InventoryFilterCriteria
// The container for the filter fields. This container is used to set the filter criteria for the order report. A seller can set date range filters and/or can retrieve orders in a specific state.
type InventoryFilterCriteria struct {
	CreationDateRange *DateRange `json:"creationDateRange,omitempty"`
	ListingFormat     *string    `json:"listingFormat,omitempty"`
	ListingStatus     *string    `json:"listingStatus,omitempty"`
	ModifiedDateRange *DateRange `json:"modifiedDateRange,omitempty"`
}
