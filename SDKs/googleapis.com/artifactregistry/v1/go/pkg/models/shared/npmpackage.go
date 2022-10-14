package shared

type NpmPackage struct {
	CreateTime  *string  `json:"createTime,omitempty"`
	Name        *string  `json:"name,omitempty"`
	PackageName *string  `json:"packageName,omitempty"`
	Tags        []string `json:"tags,omitempty"`
	UpdateTime  *string  `json:"updateTime,omitempty"`
	Version     *string  `json:"version,omitempty"`
}
