package shared

type ConnectorSetting struct {
	ID    *string      `json:"id"`
	Label *string      `json:"label"`
	Type  *interface{} `json:"type"`
}
