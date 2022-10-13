package shared

type InvoiceAttachmentAPIModelTypeEnum string

const (
	InvoiceAttachmentAPIModelTypeEnumExternal InvoiceAttachmentAPIModelTypeEnum = "External"
	InvoiceAttachmentAPIModelTypeEnumUploaded InvoiceAttachmentAPIModelTypeEnum = "Uploaded"
)

type InvoiceAttachmentAPIModel struct {
	ID                 *int32                             `json:"Id"`
	Link               *string                            `json:"Link"`
	ObfuscatedFileName *string                            `json:"ObfuscatedFileName"`
	OriginalFileName   *string                            `json:"OriginalFileName"`
	Size               *int64                             `json:"Size"`
	Type               *InvoiceAttachmentAPIModelTypeEnum `json:"Type"`
}
