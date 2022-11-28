package shared

// ProfileAttributes
// User profile attributes
type ProfileAttributes struct {
	Items []KeyValueEntry `json:"items"`
	Range Range           `json:"range"`
}
