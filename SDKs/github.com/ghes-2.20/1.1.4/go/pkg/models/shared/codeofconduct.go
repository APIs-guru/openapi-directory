package shared

// CodeOfConduct
// Code Of Conduct
type CodeOfConduct struct {
	Body    *string `json:"body,omitempty"`
	HTMLURL string  `json:"html_url"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	URL     string  `json:"url"`
}
