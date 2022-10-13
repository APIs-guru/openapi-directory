package shared

type FileKeyContainer struct {
	Iv      string  `json:"iv"`
	Key     string  `json:"key"`
	Tag     *string `json:"tag"`
	Version string  `json:"version"`
}
