package shared

type BigOvenModelAPIUserInfoTiny struct {
	FirstName *string `json:"FirstName"`
	LastName  *string `json:"LastName"`
	PhotoURL  *string `json:"PhotoUrl"`
	UserID    *int32  `json:"UserID"`
	UserName  *string `json:"UserName"`
}
