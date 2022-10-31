package shared

type InvoiceAttachmentAPIModelTypeEnum string

const (
	InvoiceAttachmentAPIModelTypeEnumExternal InvoiceAttachmentAPIModelTypeEnum = "External"
	InvoiceAttachmentAPIModelTypeEnumUploaded InvoiceAttachmentAPIModelTypeEnum = "Uploaded"
)

type InvoiceAttachmentAPIModel struct {
	ID                 *int32                             `json:"Id,omitempty"`
	Link               *string                            `json:"Link,omitempty"`
	ObfuscatedFileName *string                            `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                            `json:"OriginalFileName,omitempty"`
	Size               *int64                             `json:"Size,omitempty"`
	Type               *InvoiceAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
