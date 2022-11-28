package shared

// AttachmentContent
// A structure that includes attributes that describe a document attachment.
type AttachmentContent struct {
	Hash     *string                 `json:"Hash,omitempty"`
	HashType *AttachmentHashTypeEnum `json:"HashType,omitempty"`
	Name     *string                 `json:"Name,omitempty"`
	Size     *int64                  `json:"Size,omitempty"`
	URL      *string                 `json:"Url,omitempty"`
}
