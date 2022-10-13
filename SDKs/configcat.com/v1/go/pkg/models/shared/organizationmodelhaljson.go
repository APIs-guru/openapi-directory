package shared

type OrganizationModelHaljsonLinks struct {
	Members  *string `json:"members"`
	Products *string `json:"products"`
}

type OrganizationModelHaljson struct {
	Links          *OrganizationModelHaljsonLinks `json:"_links"`
	Name           *string                        `json:"name"`
	OrganizationID *string                        `json:"organizationId"`
}
