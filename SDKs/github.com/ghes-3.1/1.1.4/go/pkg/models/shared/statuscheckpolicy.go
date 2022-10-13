package shared

type StatusCheckPolicy struct {
	Contexts    []string `json:"contexts"`
	ContextsURL string   `json:"contexts_url"`
	Strict      bool     `json:"strict"`
	URL         string   `json:"url"`
}
