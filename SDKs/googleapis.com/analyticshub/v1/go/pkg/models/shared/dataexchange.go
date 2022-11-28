package shared

// DataExchange
// A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
type DataExchange struct {
	Description    *string `json:"description,omitempty"`
	DisplayName    *string `json:"displayName,omitempty"`
	Documentation  *string `json:"documentation,omitempty"`
	Icon           *string `json:"icon,omitempty"`
	ListingCount   *int32  `json:"listingCount,omitempty"`
	Name           *string `json:"name,omitempty"`
	PrimaryContact *string `json:"primaryContact,omitempty"`
}

// DataExchangeInput
// A data exchange is a container that lets you share data. Along with the descriptive information about the data exchange, it contains listings that reference shared datasets.
type DataExchangeInput struct {
	Description    *string `json:"description,omitempty"`
	DisplayName    *string `json:"displayName,omitempty"`
	Documentation  *string `json:"documentation,omitempty"`
	Icon           *string `json:"icon,omitempty"`
	PrimaryContact *string `json:"primaryContact,omitempty"`
}
