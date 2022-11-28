package shared

// DescribeAttachmentResponse
// The content and file name of the attachment returned by the <a>DescribeAttachment</a> operation.
type DescribeAttachmentResponse struct {
	Attachment *Attachment `json:"attachment,omitempty"`
}
