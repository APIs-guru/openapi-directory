package shared

type CreateContextRequest struct {
	ContextName string            `json:"ContextName"`
	ContextType string            `json:"ContextType"`
	Description *string           `json:"Description"`
	Properties  map[string]string `json:"Properties"`
	Source      ContextSource     `json:"Source"`
	Tags        []Tag             `json:"Tags"`
}
