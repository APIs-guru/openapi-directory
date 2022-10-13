package shared

type EfsFileLocation struct {
	FileSystemID *string `json:"FileSystemId"`
	Path         *string `json:"Path"`
}
