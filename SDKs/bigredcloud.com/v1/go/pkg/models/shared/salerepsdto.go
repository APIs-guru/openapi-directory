package shared

type SaleRepsDto struct {
	Code      *string `json:"code"`
	CompanyID *int64  `json:"companyId"`
	Email     *string `json:"email"`
	ID        *int64  `json:"id"`
	Name      *string `json:"name"`
	Phone     *string `json:"phone"`
	TimeStamp *string `json:"timeStamp"`
}
