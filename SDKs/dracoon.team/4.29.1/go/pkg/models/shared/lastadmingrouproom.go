package shared

// LastAdminGroupRoom
// Room information
type LastAdminGroupRoom struct {
	ID         int64  `json:"id"`
	Name       string `json:"name"`
	ParentID   *int64 `json:"parentId,omitempty"`
	ParentPath string `json:"parentPath"`
}
