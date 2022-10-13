package shared

type Row struct {
	CreateTime *string                `json:"createTime"`
	Name       *string                `json:"name"`
	UpdateTime *string                `json:"updateTime"`
	Values     map[string]interface{} `json:"values"`
}
