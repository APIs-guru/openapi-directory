package shared

type Alias struct {
	Name  *string  `json:"Name"`
	Names []string `json:"Names"`
	Type  *string  `json:"Type"`
}
