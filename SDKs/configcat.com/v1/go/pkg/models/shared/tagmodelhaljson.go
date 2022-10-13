package shared

type TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type TagModelHaljsonEmbeddedProductEmbeddedOrganization struct {
	Links          *TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links"`
	Name           *string                                                  `json:"name"`
	OrganizationID *string                                                  `json:"organizationId"`
}

type TagModelHaljsonEmbeddedProductEmbedded struct {
	Organization *TagModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization"`
}

type TagModelHaljsonEmbeddedProductLinks struct {
	Configs          *string `json:"configs"`
	Environments     *string `json:"environments"`
	Members          *string `json:"members"`
	PermissionGroups *string `json:"permission-groups"`
	Self             *string `json:"self"`
	Tags             *string `json:"tags"`
}

type TagModelHaljsonEmbeddedProduct struct {
	Embedded  *TagModelHaljsonEmbeddedProductEmbedded `json:"_embedded"`
	Links     *TagModelHaljsonEmbeddedProductLinks    `json:"_links"`
	Name      *string                                 `json:"name"`
	ProductID *string                                 `json:"productId"`
}

type TagModelHaljsonEmbedded struct {
	Product *TagModelHaljsonEmbeddedProduct `json:"product"`
}

type TagModelHaljsonLinks struct {
	Self *string `json:"self"`
}

type TagModelHaljson struct {
	Embedded *TagModelHaljsonEmbedded `json:"_embedded"`
	Links    *TagModelHaljsonLinks    `json:"_links"`
	Color    *string                  `json:"color"`
	Name     *string                  `json:"name"`
	TagID    *int64                   `json:"tagId"`
}
