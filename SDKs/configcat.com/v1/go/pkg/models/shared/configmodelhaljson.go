package shared



type ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks struct {
    Members *string `json:"members,omitempty"`
    Products *string `json:"products,omitempty"`
    
}

type ConfigModelHaljsonEmbeddedProductEmbeddedOrganization struct {
    Links *ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks `json:"_links,omitempty"`
    Name *string `json:"name,omitempty"`
    OrganizationID *string `json:"organizationId,omitempty"`
    
}

type ConfigModelHaljsonEmbeddedProductEmbedded struct {
    Organization *ConfigModelHaljsonEmbeddedProductEmbeddedOrganization `json:"organization,omitempty"`
    
}

type ConfigModelHaljsonEmbeddedProductLinks struct {
    Configs *string `json:"configs,omitempty"`
    Environments *string `json:"environments,omitempty"`
    Members *string `json:"members,omitempty"`
    PermissionGroups *string `json:"permission-groups,omitempty"`
    Self *string `json:"self,omitempty"`
    Tags *string `json:"tags,omitempty"`
    
}

type ConfigModelHaljsonEmbeddedProduct struct {
    Embedded *ConfigModelHaljsonEmbeddedProductEmbedded `json:"_embedded,omitempty"`
    Links *ConfigModelHaljsonEmbeddedProductLinks `json:"_links,omitempty"`
    Name *string `json:"name,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

type ConfigModelHaljsonEmbedded struct {
    Product *ConfigModelHaljsonEmbeddedProduct `json:"product,omitempty"`
    
}

type ConfigModelHaljsonLinks struct {
    Self *string `json:"self,omitempty"`
    Settings *string `json:"settings,omitempty"`
    
}

type ConfigModelHaljson struct {
    Embedded *ConfigModelHaljsonEmbedded `json:"_embedded,omitempty"`
    Links *ConfigModelHaljsonLinks `json:"_links,omitempty"`
    ConfigID *string `json:"configId,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

