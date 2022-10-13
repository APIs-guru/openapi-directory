package shared

type ScimEnterpriseUserEmails struct {
	Primary *bool   `json:"primary"`
	Type    *string `json:"type"`
	Value   *string `json:"value"`
}

type ScimEnterpriseUserGroups struct {
	Value *string `json:"value"`
}

type ScimEnterpriseUserMeta struct {
	Created      *string `json:"created"`
	LastModified *string `json:"lastModified"`
	Location     *string `json:"location"`
	ResourceType *string `json:"resourceType"`
}

type ScimEnterpriseUserName struct {
	FamilyName *string `json:"familyName"`
	GivenName  *string `json:"givenName"`
}

type ScimEnterpriseUser struct {
	Active     *bool                      `json:"active"`
	Emails     []ScimEnterpriseUserEmails `json:"emails"`
	ExternalID *string                    `json:"externalId"`
	Groups     []ScimEnterpriseUserGroups `json:"groups"`
	ID         string                     `json:"id"`
	Meta       *ScimEnterpriseUserMeta    `json:"meta"`
	Name       *ScimEnterpriseUserName    `json:"name"`
	Schemas    []string                   `json:"schemas"`
	UserName   *string                    `json:"userName"`
}
