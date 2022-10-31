package shared



type SparkOptions struct {
    ArchiveUris []string `json:"archiveUris,omitempty"`
    Connection *string `json:"connection,omitempty"`
    ContainerImage *string `json:"containerImage,omitempty"`
    FileUris []string `json:"fileUris,omitempty"`
    JarUris []string `json:"jarUris,omitempty"`
    MainFileURI *string `json:"mainFileUri,omitempty"`
    Properties map[string]string `json:"properties,omitempty"`
    PyFileUris []string `json:"pyFileUris,omitempty"`
    RuntimeVersion *string `json:"runtimeVersion,omitempty"`
    
}

