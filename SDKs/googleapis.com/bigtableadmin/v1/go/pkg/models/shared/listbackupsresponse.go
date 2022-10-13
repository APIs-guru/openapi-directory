package shared

type ListBackupsResponse struct {
	Backups       []Backup `json:"backups"`
	NextPageToken *string  `json:"nextPageToken"`
}
