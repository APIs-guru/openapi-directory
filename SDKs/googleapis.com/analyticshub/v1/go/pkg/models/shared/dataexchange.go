package shared

type DataExchange struct {
	Description    *string `json:"description"`
	DisplayName    *string `json:"displayName"`
	Documentation  *string `json:"documentation"`
	Icon           *string `json:"icon"`
	ListingCount   *int32  `json:"listingCount"`
	Name           *string `json:"name"`
	PrimaryContact *string `json:"primaryContact"`
}
