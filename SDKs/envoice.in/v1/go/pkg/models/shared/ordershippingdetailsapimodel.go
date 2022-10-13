package shared

type OrderShippingDetailsAPIModel struct {
	Address     *string `json:"Address" form:"name=Address"`
	CountryID   *int32  `json:"CountryId" form:"name=CountryId"`
	Email       *string `json:"Email" form:"name=Email"`
	Name        *string `json:"Name" form:"name=Name"`
	PhoneNumber *string `json:"PhoneNumber" form:"name=PhoneNumber"`
}
