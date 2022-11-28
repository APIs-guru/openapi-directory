package shared

// UserAuthMethod
// Authentication method
type UserAuthMethod struct {
	AuthID    string          `json:"authId"`
	IsEnabled bool            `json:"isEnabled"`
	Options   []KeyValueEntry `json:"options,omitempty"`
}
