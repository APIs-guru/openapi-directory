package shared

type TeamResponseOrganization struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type TeamResponse struct {
	Description     *string                   `json:"description,omitempty"`
	Gid             *string                   `json:"gid,omitempty"`
	HTMLDescription *string                   `json:"html_description,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	Organization    *TeamResponseOrganization `json:"organization,omitempty"`
	PermalinkURL    *string                   `json:"permalink_url,omitempty"`
	ResourceType    *string                   `json:"resource_type,omitempty"`
}
