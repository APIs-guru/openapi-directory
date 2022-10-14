package shared

type ScimGroupListEnterpriseResourcesMembers struct {
	DollarRef *string `json:"$ref,omitempty"`
	Display   *string `json:"display,omitempty"`
	Value     *string `json:"value,omitempty"`
}

type ScimGroupListEnterpriseResourcesMeta struct {
	Created      *string `json:"created,omitempty"`
	LastModified *string `json:"lastModified,omitempty"`
	Location     *string `json:"location,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}

type ScimGroupListEnterpriseResources struct {
	DisplayName *string                                   `json:"displayName,omitempty"`
	ExternalID  *string                                   `json:"externalId,omitempty"`
	ID          string                                    `json:"id"`
	Members     []ScimGroupListEnterpriseResourcesMembers `json:"members,omitempty"`
	Meta        *ScimGroupListEnterpriseResourcesMeta     `json:"meta,omitempty"`
	Schemas     []string                                  `json:"schemas"`
}

type ScimGroupListEnterprise struct {
	Resources    []ScimGroupListEnterpriseResources `json:"Resources"`
	ItemsPerPage float64                            `json:"itemsPerPage"`
	Schemas      []string                           `json:"schemas"`
	StartIndex   float64                            `json:"startIndex"`
	TotalResults float64                            `json:"totalResults"`
}
