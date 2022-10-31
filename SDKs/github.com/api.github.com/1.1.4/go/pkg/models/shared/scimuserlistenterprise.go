package shared



type ScimUserListEnterpriseResourcesEmails struct {
    Primary *bool `json:"primary,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ScimUserListEnterpriseResourcesGroups struct {
    Value *string `json:"value,omitempty"`
    
}

type ScimUserListEnterpriseResourcesMeta struct {
    Created *string `json:"created,omitempty"`
    LastModified *string `json:"lastModified,omitempty"`
    Location *string `json:"location,omitempty"`
    ResourceType *string `json:"resourceType,omitempty"`
    
}

type ScimUserListEnterpriseResourcesName struct {
    FamilyName *string `json:"familyName,omitempty"`
    GivenName *string `json:"givenName,omitempty"`
    
}

type ScimUserListEnterpriseResources struct {
    Active *bool `json:"active,omitempty"`
    Emails []ScimUserListEnterpriseResourcesEmails `json:"emails,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    Groups []ScimUserListEnterpriseResourcesGroups `json:"groups,omitempty"`
    ID string `json:"id"`
    Meta *ScimUserListEnterpriseResourcesMeta `json:"meta,omitempty"`
    Name *ScimUserListEnterpriseResourcesName `json:"name,omitempty"`
    Schemas []string `json:"schemas"`
    UserName *string `json:"userName,omitempty"`
    
}

type ScimUserListEnterprise struct {
    Resources []ScimUserListEnterpriseResources `json:"Resources"`
    ItemsPerPage float64 `json:"itemsPerPage"`
    Schemas []string `json:"schemas"`
    StartIndex float64 `json:"startIndex"`
    TotalResults float64 `json:"totalResults"`
    
}

