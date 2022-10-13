package shared

type TeamResponseOrganization struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type TeamResponse struct {
	Description     *string                   `json:"description"`
	Gid             *string                   `json:"gid"`
	HTMLDescription *string                   `json:"html_description"`
	Name            *string                   `json:"name"`
	Organization    *TeamResponseOrganization `json:"organization"`
	PermalinkURL    *string                   `json:"permalink_url"`
	ResourceType    *string                   `json:"resource_type"`
}
