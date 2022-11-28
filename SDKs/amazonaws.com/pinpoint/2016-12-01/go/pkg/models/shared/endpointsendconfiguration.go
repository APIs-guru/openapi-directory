package shared

// EndpointSendConfiguration
// Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint.
type EndpointSendConfiguration struct {
	BodyOverride  *string             `json:"BodyOverride,omitempty"`
	Context       map[string]string   `json:"Context,omitempty"`
	RawContent    *string             `json:"RawContent,omitempty"`
	Substitutions map[string][]string `json:"Substitutions,omitempty"`
	TitleOverride *string             `json:"TitleOverride,omitempty"`
}
