package shared

type AttachmentDetails struct {
	AttachmentID *string `json:"attachmentId,omitempty"`
	FileName     *string `json:"fileName,omitempty"`
}
