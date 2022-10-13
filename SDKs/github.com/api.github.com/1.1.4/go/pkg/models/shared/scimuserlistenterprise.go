package shared

type ScimUserListEnterpriseResourcesEmails struct {
	Primary *bool   `json:"primary"`
	Type    *string `json:"type"`
	Value   *string `json:"value"`
}

type ScimUserListEnterpriseResourcesGroups struct {
	Value *string `json:"value"`
}

type ScimUserListEnterpriseResourcesMeta struct {
	Created      *string `json:"created"`
	LastModified *string `json:"lastModified"`
	Location     *string `json:"location"`
	ResourceType *string `json:"resourceType"`
}

type ScimUserListEnterpriseResourcesName struct {
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
}

type ScimUserListEnterpriseResources struct {
	Active     *bool                                   `json:"active"`
	Emails     []ScimUserListEnterpriseResourcesEmails `json:"emails"`
	ExternalID *string                                 `json:"externalId"`
	Groups     []ScimUserListEnterpriseResourcesGroups `json:"groups"`
	ID         string                                  `json:"id"`
	Meta       *ScimUserListEnterpriseResourcesMeta    `json:"meta"`
	Name       *ScimUserListEnterpriseResourcesName    `json:"name"`
	Schemas    []string                                `json:"schemas"`
	UserName   *string                                 `json:"userName"`
}

type ScimUserListEnterprise struct {
	Resources    []ScimUserListEnterpriseResources `json:"Resources"`
	ItemsPerPage float64                           `json:"itemsPerPage"`
	Schemas      []string                          `json:"schemas"`
	StartIndex   float64                           `json:"startIndex"`
	TotalResults float64                           `json:"totalResults"`
}
