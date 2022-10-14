package shared

type KeyListEntry struct {
	KeyArn *string `json:"KeyArn,omitempty"`
	KeyID  *string `json:"KeyId,omitempty"`
}
