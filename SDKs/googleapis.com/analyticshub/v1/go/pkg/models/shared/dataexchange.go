package shared

type DataExchange struct {
	Description    *string `json:"description,omitempty"`
	DisplayName    *string `json:"displayName,omitempty"`
	Documentation  *string `json:"documentation,omitempty"`
	Icon           *string `json:"icon,omitempty"`
	ListingCount   *int32  `json:"listingCount,omitempty"`
	Name           *string `json:"name,omitempty"`
	PrimaryContact *string `json:"primaryContact,omitempty"`
}
