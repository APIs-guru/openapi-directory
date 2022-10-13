package shared

type EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization struct {
	Links          *EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                          `json:"name"`
	OrganizationID *string                                                          `json:"organizationId"`
}

type EnvironmentModelHaljsonEmbeddedProductEmbedded struct {
	Organization *EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type EnvironmentModelHaljsonEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type EnvironmentModelHaljsonEmbeddedProduct struct {
	Embedded  *EnvironmentModelHaljsonEmbeddedProductEmbedded `json:"_embedded"`
	Links     *EnvironmentModelHaljsonEmbeddedProductLinks    `json:"_links"`
	Name      *string                                         `json:"name"`
	ProductID *string                                         `json:"productId"`
}

type EnvironmentModelHaljsonEmbedded struct {
	Product *EnvironmentModelHaljsonEmbeddedProduct `json:"product"`
}

type EnvironmentModelHaljsonLinks struct {
	Self *string `json:"self"`
}

type EnvironmentModelHaljson struct {
	Embedded      *EnvironmentModelHaljsonEmbedded `json:"_embedded"`
	Links         *EnvironmentModelHaljsonLinks    `json:"_links"`
	EnvironmentID *string                          `json:"environmentId"`
	Name          *string                          `json:"name"`
}
