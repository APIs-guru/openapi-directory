package shared

type Filter struct {
	Name      *string  `json:"Name"`
	ValueList []string `json:"ValueList"`
}
