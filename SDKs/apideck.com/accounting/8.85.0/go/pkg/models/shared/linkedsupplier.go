package shared

// LinkedSupplierInput
// The supplier this entity is linked to.
type LinkedSupplierInput struct {
	Address     *Address `json:"address,omitempty"`
	DisplayName *string  `json:"display_name,omitempty"`
	ID          string   `json:"id"`
}

// LinkedSupplier
// The supplier this entity is linked to.
type LinkedSupplier struct {
	Address     *Address `json:"address,omitempty"`
	CompanyName *string  `json:"company_name,omitempty"`
	DisplayName *string  `json:"display_name,omitempty"`
	ID          string   `json:"id"`
}
