package shared

type RestoreServerRequest struct {
	BackupID     string  `json:"BackupId"`
	InstanceType *string `json:"InstanceType,omitempty"`
	KeyPair      *string `json:"KeyPair,omitempty"`
	ServerName   string  `json:"ServerName"`
}
