package shared

type InvoiceUpdateAttachmentAPIModelTypeEnum string

const (
	InvoiceUpdateAttachmentAPIModelTypeEnumExternal InvoiceUpdateAttachmentAPIModelTypeEnum = "External"
	InvoiceUpdateAttachmentAPIModelTypeEnumUploaded InvoiceUpdateAttachmentAPIModelTypeEnum = "Uploaded"
)

type InvoiceUpdateAttachmentAPIModel struct {
	ID                 *int32                                   `json:"Id,omitempty"`
	Link               *string                                  `json:"Link,omitempty"`
	ObfuscatedFileName *string                                  `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                                  `json:"OriginalFileName,omitempty"`
	Size               *int64                                   `json:"Size,omitempty"`
	Type               *InvoiceUpdateAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
