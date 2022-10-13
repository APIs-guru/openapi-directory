package shared

type ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type ConfigModelHaljsonEmbeddedProductEmbeddedOrganization struct {
	Links          *ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                     `json:"name"`
	OrganizationID *string                                                     `json:"organizationId"`
}

type ConfigModelHaljsonEmbeddedProductEmbedded struct {
	Organization *ConfigModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type ConfigModelHaljsonEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type ConfigModelHaljsonEmbeddedProduct struct {
	Embedded  *ConfigModelHaljsonEmbeddedProductEmbedded `json:"_embedded"`
	Links     *ConfigModelHaljsonEmbeddedProductLinks    `json:"_links"`
	Name      *string                                    `json:"name"`
	ProductID *string                                    `json:"productId"`
}

type ConfigModelHaljsonEmbedded struct {
	Product *ConfigModelHaljsonEmbeddedProduct `json:"product"`
}

type ConfigModelHaljsonLinks struct {
	Self     *string `json:"self"`
	Settings *string `json:"settings"`
}

type ConfigModelHaljson struct {
	Embedded *ConfigModelHaljsonEmbedded `json:"_embedded"`
	Links    *ConfigModelHaljsonLinks    `json:"_links"`
	ConfigID *string                     `json:"configId"`
	Name     *string                     `json:"name"`
}
