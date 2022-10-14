package shared

type EnterprisePublicKey struct {
	ID           *int64  `json:"id,omitempty"`
	Key          *string `json:"key,omitempty"`
	KeyID        *string `json:"key_id,omitempty"`
	RepositoryID *int64  `json:"repository_id,omitempty"`
	URL          *string `json:"url,omitempty"`
	UserID       *int64  `json:"user_id,omitempty"`
}
