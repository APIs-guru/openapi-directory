package shared

type AccountAttribute struct {
	Maximum *int64  `json:"Maximum,omitempty"`
	Name    *string `json:"Name,omitempty"`
	Used    *int64  `json:"Used,omitempty"`
}
