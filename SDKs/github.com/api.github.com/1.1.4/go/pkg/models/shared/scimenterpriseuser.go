package shared

type ScimEnterpriseUserEmails struct {
	Primary *bool   `json:"primary,omitempty"`
	Type    *string `json:"type,omitempty"`
	Value   *string `json:"value,omitempty"`
}

type ScimEnterpriseUserGroups struct {
	Value *string `json:"value,omitempty"`
}

type ScimEnterpriseUserMeta struct {
	Created      *string `json:"created,omitempty"`
	LastModified *string `json:"lastModified,omitempty"`
	Location     *string `json:"location,omitempty"`
	ResourceType *string `json:"resourceType,omitempty"`
}

type ScimEnterpriseUserName struct {
	FamilyName *string `json:"familyName,omitempty"`
	GivenName  *string `json:"givenName,omitempty"`
}

type ScimEnterpriseUser struct {
	Active     *bool                      `json:"active,omitempty"`
	Emails     []ScimEnterpriseUserEmails `json:"emails,omitempty"`
	ExternalID *string                    `json:"externalId,omitempty"`
	Groups     []ScimEnterpriseUserGroups `json:"groups,omitempty"`
	ID         string                     `json:"id"`
	Meta       *ScimEnterpriseUserMeta    `json:"meta,omitempty"`
	Name       *ScimEnterpriseUserName    `json:"name,omitempty"`
	Schemas    []string                   `json:"schemas"`
	UserName   *string                    `json:"userName,omitempty"`
}
