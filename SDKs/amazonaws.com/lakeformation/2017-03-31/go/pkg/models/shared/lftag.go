package shared

// LfTag
// A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
type LfTag struct {
	TagKey    string   `json:"TagKey"`
	TagValues []string `json:"TagValues"`
}
