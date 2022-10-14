package shared

type InvoiceAttachmentTypeEnum string

const (
	InvoiceAttachmentTypeEnumExternal InvoiceAttachmentTypeEnum = "External"
	InvoiceAttachmentTypeEnumUploaded InvoiceAttachmentTypeEnum = "Uploaded"
)

type InvoiceAttachment struct {
	ID                 *int32                     `json:"Id,omitempty"`
	InvoiceID          *int32                     `json:"InvoiceId,omitempty"`
	Link               *string                    `json:"Link,omitempty"`
	ObfuscatedFileName *string                    `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                    `json:"OriginalFileName,omitempty"`
	Size               *int64                     `json:"Size,omitempty"`
	Type               *InvoiceAttachmentTypeEnum `json:"Type,omitempty"`
}
