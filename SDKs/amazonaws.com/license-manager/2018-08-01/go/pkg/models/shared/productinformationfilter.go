package shared

// ProductInformationFilter
// Describes product information filters.
type ProductInformationFilter struct {
	ProductInformationFilterComparator string   `json:"ProductInformationFilterComparator"`
	ProductInformationFilterName       string   `json:"ProductInformationFilterName"`
	ProductInformationFilterValue      []string `json:"ProductInformationFilterValue,omitempty"`
}
