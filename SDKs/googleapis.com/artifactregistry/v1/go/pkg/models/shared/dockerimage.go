package shared

type DockerImage struct {
	BuildTime      *string  `json:"buildTime"`
	ImageSizeBytes *string  `json:"imageSizeBytes"`
	MediaType      *string  `json:"mediaType"`
	Name           *string  `json:"name"`
	Tags           []string `json:"tags"`
	UpdateTime     *string  `json:"updateTime"`
	UploadTime     *string  `json:"uploadTime"`
	URI            *string  `json:"uri"`
}
