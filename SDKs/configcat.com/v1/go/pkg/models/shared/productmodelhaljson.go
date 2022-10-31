package shared

type ProductModelHaljsonEmbeddedOrganizationLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type ProductModelHaljsonEmbeddedOrganization struct {
	Links          *ProductModelHaljsonEmbeddedOrganizationLinks `json:"_links,omitempty"`
	Name           *string                                       `json:"name,omitempty"`
	OrganizationID *string                                       `json:"organizationId,omitempty"`
}

type ProductModelHaljsonEmbedded struct {
	Organization *ProductModelHaljsonEmbeddedOrganization `json:"organization,omitempty"`
}

type ProductModelHaljsonLinks struct {
	Configs          *string `json:"configs,omitempty"`
	Environments     *string `json:"environments,omitempty"`
	Members          *string `json:"members,omitempty"`
	PermissionGroups *string `json:"permission-groups,omitempty"`
	Self             *string `json:"self,omitempty"`
	Tags             *string `json:"tags,omitempty"`
}

type ProductModelHaljson struct {
	Embedded  *ProductModelHaljsonEmbedded `json:"_embedded,omitempty"`
	Links     *ProductModelHaljsonLinks    `json:"_links,omitempty"`
	Name      *string                      `json:"name,omitempty"`
	ProductID *string                      `json:"productId,omitempty"`
}
