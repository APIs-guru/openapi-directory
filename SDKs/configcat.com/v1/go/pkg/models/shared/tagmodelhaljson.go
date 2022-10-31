package shared



type TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
    Members *string `json:"members,omitempty"`
    Products *string `json:"products,omitempty"`
    
}

type TagModelHaljsonEmbeddedProductEmbeddedOrganization struct {
    Links *TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationID *string `json:"organizationId,omitempty"`
    
}

type TagModelHaljsonEmbeddedProductEmbedded struct {
    Organization *TagModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
    
}

type TagModelHaljsonEmbeddedProductLinks struct {
    Configs *string `json:"configs,omitempty"`
    Environments *string `json:"environments,omitempty"`
    Members *string `json:"members,omitempty"`
    PermissionGroups *string `json:"permission-groups,omitempty"`
    Self *string `json:"self,omitempty"`
    Tags *string `json:"tags,omitempty"`
    
}

type TagModelHaljsonEmbeddedProduct struct {
    Embedded *TagModelHaljsonEmbeddedProductEmbedded `json:"_embedded,omitempty"`
    Links *TagModelHaljsonEmbeddedProductLinks `json:"_links,omitempty"`
    Name *string `json:"name,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

type TagModelHaljsonEmbedded struct {
    Product *TagModelHaljsonEmbeddedProduct `json:"product,omitempty"`
    
}

type TagModelHaljsonLinks struct {
    Self *string `json:"self,omitempty"`
    
}

type TagModelHaljson struct {
    Embedded *TagModelHaljsonEmbedded `json:"_embedded,omitempty"`
    Links *TagModelHaljsonLinks `json:"_links,omitempty"`
    Color *string `json:"color,omitempty"`
    Name *string `json:"name,omitempty"`
    TagID *int64 `json:"tagId,omitempty"`
    
}

