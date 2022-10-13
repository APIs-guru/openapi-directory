package shared

type PresignedURL struct {
	PartNumber int32  `json:"partNumber"`
	URL        string `json:"url"`
}
