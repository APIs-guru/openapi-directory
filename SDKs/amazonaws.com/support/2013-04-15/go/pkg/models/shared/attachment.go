package shared

type Attachment struct {
	Data     *string `json:"data,omitempty"`
	FileName *string `json:"fileName,omitempty"`
}
