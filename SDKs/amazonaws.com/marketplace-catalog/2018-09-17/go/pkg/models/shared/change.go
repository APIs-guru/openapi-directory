package shared

// Change
// An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
type Change struct {
	ChangeName *string `json:"ChangeName,omitempty"`
	ChangeType string  `json:"ChangeType"`
	Details    string  `json:"Details"`
	Entity     Entity  `json:"Entity"`
}
