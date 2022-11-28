package shared

// Attachment
// An attachment to a case communication. The attachment consists of the file name and the content of the file.
type Attachment struct {
	Data     *string `json:"data,omitempty"`
	FileName *string `json:"fileName,omitempty"`
}
