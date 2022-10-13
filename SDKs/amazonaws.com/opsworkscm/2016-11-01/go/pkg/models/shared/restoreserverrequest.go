package shared

type RestoreServerRequest struct {
	BackupID     string  `json:"BackupId"`
	InstanceType *string `json:"InstanceType"`
	KeyPair      *string `json:"KeyPair"`
	ServerName   string  `json:"ServerName"`
}
