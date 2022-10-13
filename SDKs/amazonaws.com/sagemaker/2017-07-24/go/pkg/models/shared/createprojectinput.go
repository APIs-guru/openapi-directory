package shared

type CreateProjectInput struct {
	ProjectDescription                *string                           `json:"ProjectDescription"`
	ProjectName                       string                            `json:"ProjectName"`
	ServiceCatalogProvisioningDetails ServiceCatalogProvisioningDetails `json:"ServiceCatalogProvisioningDetails"`
	Tags                              []Tag                             `json:"Tags"`
}
