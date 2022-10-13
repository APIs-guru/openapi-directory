package shared

type LinkedSupplier struct {
	Address     *Address `json:"address"`
	CompanyName *string  `json:"company_name"`
	DisplayName *string  `json:"display_name"`
	ID          string   `json:"id"`
}
