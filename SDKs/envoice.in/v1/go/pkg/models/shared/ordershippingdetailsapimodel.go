package shared

type OrderShippingDetailsAPIModel struct {
	Address     *string `json:"Address,omitempty" form:"name=Address"`
	CountryID   *int32  `json:"CountryId,omitempty" form:"name=CountryId"`
	Email       *string `json:"Email,omitempty" form:"name=Email"`
	Name        *string `json:"Name,omitempty" form:"name=Name"`
	PhoneNumber *string `json:"PhoneNumber,omitempty" form:"name=PhoneNumber"`
}
