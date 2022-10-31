package shared



type FileSystemDataSource struct {
    DirectoryPath string `json:"DirectoryPath"`
    FileSystemAccessMode FileSystemAccessModeEnum `json:"FileSystemAccessMode"`
    FileSystemID string `json:"FileSystemId"`
    FileSystemType FileSystemTypeEnum `json:"FileSystemType"`
    
}

