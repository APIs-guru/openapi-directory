package shared



type SftpTransport struct {
    FilePath string `json:"filePath"`
    Host string `json:"host"`
    Port float64 `json:"port"`
    Type string `json:"type"`
    
}

