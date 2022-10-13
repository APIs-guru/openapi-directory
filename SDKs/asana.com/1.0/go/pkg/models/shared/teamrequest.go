package shared

type TeamRequest struct {
	Description     *string `json:"description"`
	Gid             *string `json:"gid"`
	HTMLDescription *string `json:"html_description"`
	Name            *string `json:"name"`
	Organization    *string `json:"organization"`
	ResourceType    *string `json:"resource_type"`
}
