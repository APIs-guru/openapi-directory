package shared

type UserAuthMethod struct {
	AuthID    string          `json:"authId"`
	IsEnabled bool            `json:"isEnabled"`
	Options   []KeyValueEntry `json:"options"`
}
