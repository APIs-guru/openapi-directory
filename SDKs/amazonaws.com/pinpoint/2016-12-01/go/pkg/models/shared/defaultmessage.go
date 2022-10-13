package shared

type DefaultMessage struct {
	Body          *string             `json:"Body"`
	Substitutions map[string][]string `json:"Substitutions"`
}
