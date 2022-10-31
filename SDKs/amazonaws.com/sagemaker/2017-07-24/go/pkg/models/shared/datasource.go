package shared



type DataSource struct {
    FileSystemDataSource *FileSystemDataSource `json:"FileSystemDataSource,omitempty"`
    S3DataSource *S3DataSource `json:"S3DataSource,omitempty"`
    
}

