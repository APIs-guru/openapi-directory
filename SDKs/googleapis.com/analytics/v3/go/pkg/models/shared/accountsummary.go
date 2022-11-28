package shared

// AccountSummary
// JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
type AccountSummary struct {
	ID            *string              `json:"id,omitempty"`
	Kind          *string              `json:"kind,omitempty"`
	Name          *string              `json:"name,omitempty"`
	Starred       *bool                `json:"starred,omitempty"`
	WebProperties []WebPropertySummary `json:"webProperties,omitempty"`
}
