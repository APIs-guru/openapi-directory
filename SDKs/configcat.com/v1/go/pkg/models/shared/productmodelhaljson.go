package shared

type ProductModelHaljsonEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type ProductModelHaljsonEmbeddedOrganization struct {
	Links          *ProductModelHaljsonEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                       `json:"name"`
	OrganizationID *string                                       `json:"organizationId"`
}

type ProductModelHaljsonEmbedded struct {
	Organization *ProductModelHaljsonEmbeddedOrganization `json:"organization"`
}

type ProductModelHaljsonLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type ProductModelHaljson struct {
	Embedded  *ProductModelHaljsonEmbedded `json:"_embedded"`
	Links     *ProductModelHaljsonLinks    `json:"_links"`
	Name      *string                      `json:"name"`
	ProductID *string                      `json:"productId"`
}
