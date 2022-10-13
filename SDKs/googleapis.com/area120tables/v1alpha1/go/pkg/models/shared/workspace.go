package shared

type Workspace struct {
	CreateTime  *string `json:"createTime"`
	DisplayName *string `json:"displayName"`
	Name        *string `json:"name"`
	Tables      []Table `json:"tables"`
	UpdateTime  *string `json:"updateTime"`
}
