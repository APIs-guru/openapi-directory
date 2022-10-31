package shared

type FileKey struct {
	Iv      string `json:"iv"`
	Key     string `json:"key"`
	Tag     string `json:"tag"`
	Version string `json:"version"`
}
