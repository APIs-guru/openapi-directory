package shared

type AccountAttribute struct {
	Maximum *int64  `json:"Maximum"`
	Name    *string `json:"Name"`
	Used    *int64  `json:"Used"`
}
