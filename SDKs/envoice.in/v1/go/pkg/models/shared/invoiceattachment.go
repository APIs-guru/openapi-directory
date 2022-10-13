package shared

type InvoiceAttachmentTypeEnum string

const (
	InvoiceAttachmentTypeEnumExternal InvoiceAttachmentTypeEnum = "External"
	InvoiceAttachmentTypeEnumUploaded InvoiceAttachmentTypeEnum = "Uploaded"
)

type InvoiceAttachment struct {
	ID                 *int32                     `json:"Id"`
	InvoiceID          *int32                     `json:"InvoiceId"`
	Link               *string                    `json:"Link"`
	ObfuscatedFileName *string                    `json:"ObfuscatedFileName"`
	OriginalFileName   *string                    `json:"OriginalFileName"`
	Size               *int64                     `json:"Size"`
	Type               *InvoiceAttachmentTypeEnum `json:"Type"`
}
