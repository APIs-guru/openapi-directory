package shared

type ActionsPublicKey struct {
	CreatedAt *string `json:"created_at"`
	ID        *int64  `json:"id"`
	Key       string  `json:"key"`
	KeyID     string  `json:"key_id"`
	Title     *string `json:"title"`
	URL       *string `json:"url"`
}
