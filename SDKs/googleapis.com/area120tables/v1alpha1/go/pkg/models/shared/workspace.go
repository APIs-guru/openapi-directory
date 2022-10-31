package shared

type Workspace struct {
	CreateTime  *string `json:"createTime,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        *string `json:"name,omitempty"`
	Tables      []Table `json:"tables,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
