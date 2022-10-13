package shared

type SyncState struct {
	Attachment *Attachment                `json:"Attachment"`
	Config     map[string]PerObjectStatus `json:"Config"`
}
