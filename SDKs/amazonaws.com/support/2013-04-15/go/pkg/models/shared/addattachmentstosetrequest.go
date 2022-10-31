package shared



type AddAttachmentsToSetRequest struct {
    AttachmentSetID *string `json:"attachmentSetId,omitempty"`
    Attachments []Attachment `json:"attachments"`
    
}

