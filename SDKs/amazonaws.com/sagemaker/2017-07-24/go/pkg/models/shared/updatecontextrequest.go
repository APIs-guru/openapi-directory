package shared

type UpdateContextRequest struct {
	ContextName        string            `json:"ContextName"`
	Description        *string           `json:"Description"`
	Properties         map[string]string `json:"Properties"`
	PropertiesToRemove []string          `json:"PropertiesToRemove"`
}
