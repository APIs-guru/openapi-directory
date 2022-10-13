package shared

type LastAdminUserRoom struct {
	ID                 int64  `json:"id"`
	LastAdminInGroup   bool   `json:"lastAdminInGroup"`
	LastAdminInGroupID *int64 `json:"lastAdminInGroupId"`
	Name               string `json:"name"`
	ParentID           *int64 `json:"parentId"`
	ParentPath         string `json:"parentPath"`
}
