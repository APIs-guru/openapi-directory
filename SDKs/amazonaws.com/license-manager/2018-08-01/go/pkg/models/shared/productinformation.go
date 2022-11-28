package shared

// ProductInformation
// Describes product information for a license configuration.
type ProductInformation struct {
	ProductInformationFilterList []ProductInformationFilter `json:"ProductInformationFilterList"`
	ResourceType                 string                     `json:"ResourceType"`
}
