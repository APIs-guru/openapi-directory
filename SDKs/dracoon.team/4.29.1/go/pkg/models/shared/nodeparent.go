package shared

type NodeParent struct {
	ID       int64  `json:"id"`
	Name     string `json:"name"`
	ParentID *int64 `json:"parentId"`
	Type     string `json:"type"`
}
