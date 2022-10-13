package shared

type PythonPackage struct {
	CreateTime  *string `json:"createTime"`
	Name        *string `json:"name"`
	PackageName *string `json:"packageName"`
	UpdateTime  *string `json:"updateTime"`
	URI         *string `json:"uri"`
	Version     *string `json:"version"`
}
