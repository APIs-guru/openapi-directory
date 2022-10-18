package shared

type ConnectorSetting struct {
	ID    *string      `json:"id,omitempty"`
	Label *string      `json:"label,omitempty"`
	Type  *interface{} `json:"type,omitempty"`
}
