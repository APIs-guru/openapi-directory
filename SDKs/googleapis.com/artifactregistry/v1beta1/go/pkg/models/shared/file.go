package shared

type File struct {
	CreateTime *string `json:"createTime"`
	Hashes     []Hash  `json:"hashes"`
	Name       *string `json:"name"`
	Owner      *string `json:"owner"`
	SizeBytes  *string `json:"sizeBytes"`
	UpdateTime *string `json:"updateTime"`
}
