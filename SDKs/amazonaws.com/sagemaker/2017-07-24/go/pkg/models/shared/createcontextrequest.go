package shared

type CreateContextRequest struct {
	ContextName string            `json:"ContextName"`
	ContextType string            `json:"ContextType"`
	Description *string           `json:"Description,omitempty"`
	Properties  map[string]string `json:"Properties,omitempty"`
	Source      ContextSource     `json:"Source"`
	Tags        []Tag             `json:"Tags,omitempty"`
}
