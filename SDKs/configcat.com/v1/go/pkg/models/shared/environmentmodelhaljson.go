package shared

type EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization struct {
	Links          *EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
	Name           *string                                                          `json:"name,omitempty"`
	OrganizationID *string                                                          `json:"organizationId,omitempty"`
}

type EnvironmentModelHaljsonEmbeddedProductEmbedded struct {
	Organization *EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
}

type EnvironmentModelHaljsonEmbeddedProductLinks struct {
	Configs          *string `json:"configs,omitempty"`
	Environments     *string `json:"environments,omitempty"`
	Members          *string `json:"members,omitempty"`
	PermissionGroups *string `json:"permission-groups,omitempty"`
	Self             *string `json:"self,omitempty"`
	Tags             *string `json:"tags,omitempty"`
}

type EnvironmentModelHaljsonEmbeddedProduct struct {
	Embedded  *EnvironmentModelHaljsonEmbeddedProductEmbedded `json:"_embedded,omitempty"`
	Links     *EnvironmentModelHaljsonEmbeddedProductLinks    `json:"_links,omitempty"`
	Name      *string                                         `json:"name,omitempty"`
	ProductID *string                                         `json:"productId,omitempty"`
}

type EnvironmentModelHaljsonEmbedded struct {
	Product *EnvironmentModelHaljsonEmbeddedProduct `json:"product,omitempty"`
}

type EnvironmentModelHaljsonLinks struct {
	Self *string `json:"self,omitempty"`
}

type EnvironmentModelHaljson struct {
	Embedded      *EnvironmentModelHaljsonEmbedded `json:"_embedded,omitempty"`
	Links         *EnvironmentModelHaljsonLinks    `json:"_links,omitempty"`
	EnvironmentID *string                          `json:"environmentId,omitempty"`
	Name          *string                          `json:"name,omitempty"`
}
