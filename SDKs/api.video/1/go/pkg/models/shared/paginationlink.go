package shared

type PaginationLink struct {
	Rel *string `json:"rel,omitempty"`
	URI *string `json:"uri,omitempty"`
}
