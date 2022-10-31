package shared

type Row struct {
	CreateTime *string                `json:"createTime,omitempty"`
	Name       *string                `json:"name,omitempty"`
	UpdateTime *string                `json:"updateTime,omitempty"`
	Values     map[string]interface{} `json:"values,omitempty"`
}
