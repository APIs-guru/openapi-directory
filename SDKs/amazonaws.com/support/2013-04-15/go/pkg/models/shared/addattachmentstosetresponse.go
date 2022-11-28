package shared

// AddAttachmentsToSetResponse
// The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
type AddAttachmentsToSetResponse struct {
	AttachmentSetID *string `json:"attachmentSetId,omitempty"`
	ExpiryTime      *string `json:"expiryTime,omitempty"`
}
