package shared

type EnterprisePublicKey struct {
	ID           *int64  `json:"id"`
	Key          *string `json:"key"`
	KeyID        *string `json:"key_id"`
	RepositoryID *int64  `json:"repository_id"`
	URL          *string `json:"url"`
	UserID       *int64  `json:"user_id"`
}
