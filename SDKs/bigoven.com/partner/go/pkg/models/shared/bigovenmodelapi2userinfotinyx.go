package shared

type BigOvenModelApi2UserInfoTinyx struct {
	FirstName *string `json:"FirstName,omitempty"`
	LastName  *string `json:"LastName,omitempty"`
	PhotoURL  *string `json:"PhotoUrl,omitempty"`
	UserID    *int32  `json:"UserID,omitempty"`
	UserName  *string `json:"UserName,omitempty"`
}
