package shared

// LastAdminUserRoom
// Room information
type LastAdminUserRoom struct {
	ID                 int64  `json:"id"`
	LastAdminInGroup   bool   `json:"lastAdminInGroup"`
	LastAdminInGroupID *int64 `json:"lastAdminInGroupId,omitempty"`
	Name               string `json:"name"`
	ParentID           *int64 `json:"parentId,omitempty"`
	ParentPath         string `json:"parentPath"`
}
