package shared

type TeamRequestInput struct {
	Description     *string `json:"description,omitempty"`
	HTMLDescription *string `json:"html_description,omitempty"`
	Name            *string `json:"name,omitempty"`
	Organization    *string `json:"organization,omitempty"`
}
