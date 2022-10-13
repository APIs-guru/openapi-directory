package shared

type CodeOfConduct struct {
	Body    *string `json:"body"`
	HTMLURL string  `json:"html_url"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	URL     string  `json:"url"`
}
