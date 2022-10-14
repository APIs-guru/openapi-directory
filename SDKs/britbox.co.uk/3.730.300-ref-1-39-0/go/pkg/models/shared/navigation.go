package shared

type Navigation struct {
	Account      *NavEntry              `json:"account,omitempty"`
	Copyright    *string                `json:"copyright,omitempty"`
	CustomFields map[string]interface{} `json:"customFields,omitempty"`
	Footer       *NavEntry              `json:"footer,omitempty"`
	Header       []NavEntry             `json:"header"`
	Mobile       *NavEntry              `json:"mobile,omitempty"`
}
