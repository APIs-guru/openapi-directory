package shared

type ScimEnterpriseGroupMembers struct {
	DollarRef *string `json:"$ref"`
	Display   *string `json:"display"`
	Value     *string `json:"value"`
}

type ScimEnterpriseGroupMeta struct {
	Created      *string `json:"created"`
	LastModified *string `json:"lastModified"`
	Location     *string `json:"location"`
	ResourceType *string `json:"resourceType"`
}

type ScimEnterpriseGroup struct {
	DisplayName *string                      `json:"displayName"`
	ExternalID  *string                      `json:"externalId"`
	ID          string                       `json:"id"`
	Members     []ScimEnterpriseGroupMembers `json:"members"`
	Meta        *ScimEnterpriseGroupMeta     `json:"meta"`
	Schemas     []string                     `json:"schemas"`
}
