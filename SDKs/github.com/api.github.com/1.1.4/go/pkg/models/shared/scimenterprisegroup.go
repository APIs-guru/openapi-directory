package shared



type ScimEnterpriseGroupMembers struct {
    DollarRef *string `json:"$ref,omitempty"`
    Display *string `json:"display,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type ScimEnterpriseGroupMeta struct {
    Created *string `json:"created,omitempty"`
    LastModified *string `json:"lastModified,omitempty"`
    Location *string `json:"location,omitempty"`
    ResourceType *string `json:"resourceType,omitempty"`
    
}

type ScimEnterpriseGroup struct {
    DisplayName *string `json:"displayName,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    ID string `json:"id"`
    Members []ScimEnterpriseGroupMembers `json:"members,omitempty"`
    Meta *ScimEnterpriseGroupMeta `json:"meta,omitempty"`
    Schemas []string `json:"schemas"`
    
}

