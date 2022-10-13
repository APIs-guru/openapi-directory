package shared

type OrderAttachmentAPIModelTypeEnum string

const (
	OrderAttachmentAPIModelTypeEnumExternal OrderAttachmentAPIModelTypeEnum = "External"
	OrderAttachmentAPIModelTypeEnumUploaded OrderAttachmentAPIModelTypeEnum = "Uploaded"
)

type OrderAttachmentAPIModel struct {
	Link               *string                          `json:"Link"`
	ObfuscatedFileName *string                          `json:"ObfuscatedFileName"`
	OriginalFileName   *string                          `json:"OriginalFileName"`
	Size               *int64                           `json:"Size"`
	Type               *OrderAttachmentAPIModelTypeEnum `json:"Type"`
}
