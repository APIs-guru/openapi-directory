package shared

type ProductAttachmentAPIModelTypeEnum string

const (
	ProductAttachmentAPIModelTypeEnumExternal ProductAttachmentAPIModelTypeEnum = "External"
	ProductAttachmentAPIModelTypeEnumUploaded ProductAttachmentAPIModelTypeEnum = "Uploaded"
)

type ProductAttachmentAPIModel struct {
	ID                 *int32                             `json:"Id"`
	Link               *string                            `json:"Link"`
	ObfuscatedFileName *string                            `json:"ObfuscatedFileName"`
	OriginalFileName   *string                            `json:"OriginalFileName"`
	Size               *int64                             `json:"Size"`
	Type               *ProductAttachmentAPIModelTypeEnum `json:"Type"`
}
