package shared

type ProductInformationFilter struct {
	ProductInformationFilterComparator string   `json:"ProductInformationFilterComparator"`
	ProductInformationFilterName       string   `json:"ProductInformationFilterName"`
	ProductInformationFilterValue      []string `json:"ProductInformationFilterValue,omitempty"`
}
