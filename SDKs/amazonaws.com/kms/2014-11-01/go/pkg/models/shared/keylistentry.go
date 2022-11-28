package shared

// KeyListEntry
// Contains information about each entry in the key list.
type KeyListEntry struct {
	KeyArn *string `json:"KeyArn,omitempty"`
	KeyID  *string `json:"KeyId,omitempty"`
}
