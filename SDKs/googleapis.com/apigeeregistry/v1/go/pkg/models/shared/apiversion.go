package shared

type APIVersion struct {
	Annotations map[string]string `json:"annotations"`
	CreateTime  *string           `json:"createTime"`
	Description *string           `json:"description"`
	DisplayName *string           `json:"displayName"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	State       *string           `json:"state"`
	UpdateTime  *string           `json:"updateTime"`
}
