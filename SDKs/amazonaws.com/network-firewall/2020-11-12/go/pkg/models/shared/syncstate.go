package shared

type SyncState struct {
	Attachment *Attachment                `json:"Attachment,omitempty"`
	Config     map[string]PerObjectStatus `json:"Config,omitempty"`
}
