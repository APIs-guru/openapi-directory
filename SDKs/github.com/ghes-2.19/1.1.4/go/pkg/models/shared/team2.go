package shared

type Team2Parent struct {
	Description     *string `json:"description"`
	HTMLURL         *string `json:"html_url"`
	ID              *int64  `json:"id"`
	MembersURL      *string `json:"members_url"`
	Name            *string `json:"name"`
	NodeID          *string `json:"node_id"`
	Permission      *string `json:"permission"`
	Privacy         *string `json:"privacy"`
	RepositoriesURL *string `json:"repositories_url"`
	Slug            *string `json:"slug"`
	URL             *string `json:"url"`
}

type Team2 struct {
	Description     *string      `json:"description"`
	ID              *int64       `json:"id"`
	MembersURL      *string      `json:"members_url"`
	Name            *string      `json:"name"`
	NodeID          *string      `json:"node_id"`
	Parent          *Team2Parent `json:"parent"`
	Permission      *string      `json:"permission"`
	Privacy         *string      `json:"privacy"`
	RepositoriesURL *string      `json:"repositories_url"`
	Slug            *string      `json:"slug"`
	URL             *string      `json:"url"`
}
