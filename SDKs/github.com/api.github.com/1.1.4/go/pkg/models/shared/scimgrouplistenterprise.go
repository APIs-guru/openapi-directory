package shared

type ScimGroupListEnterpriseResourcesMembers struct {
	DollarRef *string `json:"$ref"`
	Display   *string `json:"display"`
	Value     *string `json:"value"`
}

type ScimGroupListEnterpriseResourcesMeta struct {
	Created      *string `json:"created"`
	LastModified *string `json:"lastModified"`
	Location     *string `json:"location"`
	ResourceType *string `json:"resourceType"`
}

type ScimGroupListEnterpriseResources struct {
	DisplayName *string                                   `json:"displayName"`
	ExternalID  *string                                   `json:"externalId"`
	ID          string                                    `json:"id"`
	Members     []ScimGroupListEnterpriseResourcesMembers `json:"members"`
	Meta        *ScimGroupListEnterpriseResourcesMeta     `json:"meta"`
	Schemas     []string                                  `json:"schemas"`
}

type ScimGroupListEnterprise struct {
	Resources    []ScimGroupListEnterpriseResources `json:"Resources"`
	ItemsPerPage float64                            `json:"itemsPerPage"`
	Schemas      []string                           `json:"schemas"`
	StartIndex   float64                            `json:"startIndex"`
	TotalResults float64                            `json:"totalResults"`
}
