package shared

type ProductModel struct {
	Name         *string            `json:"name,omitempty"`
	Organization *OrganizationModel `json:"organization,omitempty"`
	ProductID    *string            `json:"productId,omitempty"`
}
