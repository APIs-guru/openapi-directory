package shared

type OrderBillingDetailsAPIModel struct {
	Address     *string `json:"Address"`
	CountryID   *int32  `json:"CountryId"`
	Email       *string `json:"Email"`
	Name        *string `json:"Name"`
	PhoneNumber *string `json:"PhoneNumber"`
}
