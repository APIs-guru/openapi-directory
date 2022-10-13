package shared

type NpmPackage struct {
	CreateTime  *string  `json:"createTime"`
	Name        *string  `json:"name"`
	PackageName *string  `json:"packageName"`
	Tags        []string `json:"tags"`
	UpdateTime  *string  `json:"updateTime"`
	Version     *string  `json:"version"`
}
