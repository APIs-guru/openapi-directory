package shared

type CreateBackupRequest struct {
	Description *string `json:"Description"`
	ServerName  string  `json:"ServerName"`
	Tags        []Tag   `json:"Tags"`
}
