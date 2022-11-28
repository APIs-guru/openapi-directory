package shared

// ScimUserList
// SCIM User List
type ScimUserList struct {
	Resources    []ScimUser `json:"Resources"`
	ItemsPerPage int64      `json:"itemsPerPage"`
	Schemas      []string   `json:"schemas"`
	StartIndex   int64      `json:"startIndex"`
	TotalResults int64      `json:"totalResults"`
}
