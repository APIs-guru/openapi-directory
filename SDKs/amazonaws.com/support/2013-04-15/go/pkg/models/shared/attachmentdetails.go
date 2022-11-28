package shared

// AttachmentDetails
// The file name and ID of an attachment to a case communication. You can use the ID to retrieve the attachment with the <a>DescribeAttachment</a> operation.
type AttachmentDetails struct {
	AttachmentID *string `json:"attachmentId,omitempty"`
	FileName     *string `json:"fileName,omitempty"`
}
