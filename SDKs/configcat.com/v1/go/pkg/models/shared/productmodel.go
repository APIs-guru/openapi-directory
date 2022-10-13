package shared

type ProductModel struct {
	Name         *string            `json:"name"`
	Organization *OrganizationModel `json:"organization"`
	ProductID    *string            `json:"productId"`
}
