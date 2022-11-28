package shared

// AccountsList
// An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.
type AccountsList struct {
	Items []Account `json:"items,omitempty"`
	Kind  *string   `json:"kind,omitempty"`
}
