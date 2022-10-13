package shared

type Navigation struct {
	Account      *NavEntry              `json:"account"`
	Copyright    *string                `json:"copyright"`
	CustomFields map[string]interface{} `json:"customFields"`
	Footer       *NavEntry              `json:"footer"`
	Header       []NavEntry             `json:"header"`
	Mobile       *NavEntry              `json:"mobile"`
}
