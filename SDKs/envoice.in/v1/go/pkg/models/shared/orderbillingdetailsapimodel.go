package shared

type OrderBillingDetailsAPIModel struct {
	Address     *string `json:"Address,omitempty"`
	CountryID   *int32  `json:"CountryId,omitempty"`
	Email       *string `json:"Email,omitempty"`
	Name        *string `json:"Name,omitempty"`
	PhoneNumber *string `json:"PhoneNumber,omitempty"`
}
