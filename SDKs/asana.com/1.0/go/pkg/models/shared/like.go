package shared

// Like
// An object to represent a user's like.
type Like struct {
	Gid  *string      `json:"gid,omitempty"`
	User *UserCompact `json:"user,omitempty"`
}
