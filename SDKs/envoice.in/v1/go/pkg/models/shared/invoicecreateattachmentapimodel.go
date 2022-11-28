package shared

type InvoiceCreateAttachmentAPIModelTypeEnum string

const (
	InvoiceCreateAttachmentAPIModelTypeEnumExternal InvoiceCreateAttachmentAPIModelTypeEnum = "External"
	InvoiceCreateAttachmentAPIModelTypeEnumUploaded InvoiceCreateAttachmentAPIModelTypeEnum = "Uploaded"
)

type InvoiceCreateAttachmentAPIModel struct {
	Link               *string                                  `json:"Link,omitempty"`
	ObfuscatedFileName *string                                  `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                                  `json:"OriginalFileName,omitempty"`
	Size               *int64                                   `json:"Size,omitempty"`
	Type               *InvoiceCreateAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
