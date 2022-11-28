package shared

// SftpTransport
// Describes a single SFTP connection in all of it variations
type SftpTransport struct {
	FilePath string  `json:"filePath"`
	Host     string  `json:"host"`
	Port     float64 `json:"port"`
	Type     string  `json:"type"`
}
