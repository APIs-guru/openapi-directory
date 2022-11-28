package shared

// MissingKeysResponseOutput
// Missing keys information
type MissingKeysResponseOutput struct {
	Files []FileFileKeys            `json:"files,omitempty"`
	Items []UserIDFileIDItem        `json:"items,omitempty"`
	Range *Range                    `json:"range,omitempty"`
	Users []UserUserPublicKeyOutput `json:"users,omitempty"`
}
