package shared

type LinkedCustomer struct {
	CompanyName *string `json:"company_name"`
	DisplayID   *string `json:"display_id"`
	DisplayName *string `json:"display_name"`
	ID          string  `json:"id"`
	Name        *string `json:"name"`
}
