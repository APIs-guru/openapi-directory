package shared

type AccountsList struct {
	Items []Account `json:"items,omitempty"`
	Kind  *string   `json:"kind,omitempty"`
}
