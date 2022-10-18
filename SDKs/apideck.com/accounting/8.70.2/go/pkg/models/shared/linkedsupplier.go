package shared

type LinkedSupplier struct {
	Address     *Address `json:"address,omitempty"`
	CompanyName *string  `json:"company_name,omitempty"`
	DisplayName *string  `json:"display_name,omitempty"`
	ID          string   `json:"id"`
}
