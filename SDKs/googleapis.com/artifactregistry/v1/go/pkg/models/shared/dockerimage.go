package shared



type DockerImage struct {
    BuildTime *string `json:"buildTime,omitempty"`
    ImageSizeBytes *string `json:"imageSizeBytes,omitempty"`
    MediaType *string `json:"mediaType,omitempty"`
    Name *string `json:"name,omitempty"`
    Tags []string `json:"tags,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    UploadTime *string `json:"uploadTime,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

