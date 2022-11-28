package shared

// ReturnAddress
// This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
type ReturnAddress struct {
	AddressLine1    *string `json:"addressLine1,omitempty"`
	AddressLine2    *string `json:"addressLine2,omitempty"`
	City            *string `json:"city,omitempty"`
	Country         *string `json:"country,omitempty"`
	County          *string `json:"county,omitempty"`
	FullName        *string `json:"fullName,omitempty"`
	PostalCode      *string `json:"postalCode,omitempty"`
	PrimaryPhone    *Phone  `json:"primaryPhone,omitempty"`
	StateOrProvince *string `json:"stateOrProvince,omitempty"`
}
