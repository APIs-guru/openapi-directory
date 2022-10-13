package shared

type LastAdminGroupRoom struct {
	ID         int64  `json:"id"`
	Name       string `json:"name"`
	ParentID   *int64 `json:"parentId"`
	ParentPath string `json:"parentPath"`
}
