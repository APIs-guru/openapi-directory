package shared



type GoogleCloudApigeeV1Developer struct {
    AccessType *string `json:"accessType,omitempty"`
    AppFamily *string `json:"appFamily,omitempty"`
    Apps []string `json:"apps,omitempty"`
    Attributes []GoogleCloudApigeeV1Attribute `json:"attributes,omitempty"`
    Companies []string `json:"companies,omitempty"`
    CreatedAt *string `json:"createdAt,omitempty"`
    DeveloperID *string `json:"developerId,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    LastModifiedAt *string `json:"lastModifiedAt,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    OrganizationName *string `json:"organizationName,omitempty"`
    Status *string `json:"status,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

