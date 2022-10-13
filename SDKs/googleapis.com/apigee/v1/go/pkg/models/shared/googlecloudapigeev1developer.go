package shared

type GoogleCloudApigeeV1Developer struct {
	AccessType       *string                        `json:"accessType"`
	AppFamily        *string                        `json:"appFamily"`
	Apps             []string                       `json:"apps"`
	Attributes       []GoogleCloudApigeeV1Attribute `json:"attributes"`
	Companies        []string                       `json:"companies"`
	CreatedAt        *string                        `json:"createdAt"`
	DeveloperID      *string                        `json:"developerId"`
	Email            *string                        `json:"email"`
	FirstName        *string                        `json:"firstName"`
	LastModifiedAt   *string                        `json:"lastModifiedAt"`
	LastName         *string                        `json:"lastName"`
	OrganizationName *string                        `json:"organizationName"`
	Status           *string                        `json:"status"`
	UserName         *string                        `json:"userName"`
}
