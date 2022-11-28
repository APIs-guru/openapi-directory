package shared

// ActionsPublicKey
// The public key used for setting Actions Secrets.
type ActionsPublicKey struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	Key       string  `json:"key"`
	KeyID     string  `json:"key_id"`
	Title     *string `json:"title,omitempty"`
	URL       *string `json:"url,omitempty"`
}
