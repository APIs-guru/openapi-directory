package shared

type AddAttachmentsToSetRequest struct {
	AttachmentSetID *string      `json:"attachmentSetId"`
	Attachments     []Attachment `json:"attachments"`
}
