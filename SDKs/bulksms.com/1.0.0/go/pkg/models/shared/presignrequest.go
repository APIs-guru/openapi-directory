package shared

type PreSignRequest struct {
	FileExtension *string `json:"fileExtension,omitempty"`
	MediaType     *string `json:"mediaType,omitempty"`
}
