package shared

// Status
// The status of a commit.
type Status struct {
	AvatarURL   string     `json:"avatar_url"`
	Context     string     `json:"context"`
	CreatedAt   string     `json:"created_at"`
	Creator     SimpleUser `json:"creator"`
	Description string     `json:"description"`
	ID          int64      `json:"id"`
	NodeID      string     `json:"node_id"`
	State       string     `json:"state"`
	TargetURL   string     `json:"target_url"`
	UpdatedAt   string     `json:"updated_at"`
	URL         string     `json:"url"`
}
