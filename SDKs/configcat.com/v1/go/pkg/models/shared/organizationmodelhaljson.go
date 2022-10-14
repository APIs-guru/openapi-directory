package shared

type OrganizationModelHaljsonLinks struct {
	Members  *string `json:"members,omitempty"`
	Products *string `json:"products,omitempty"`
}

type OrganizationModelHaljson struct {
	Links          *OrganizationModelHaljsonLinks `json:"_links,omitempty"`
	Name           *string                        `json:"name,omitempty"`
	OrganizationID *string                        `json:"organizationId,omitempty"`
}
