package shared

type ProductAttachmentAPIModelTypeEnum string

const (
	ProductAttachmentAPIModelTypeEnumExternal ProductAttachmentAPIModelTypeEnum = "External"
	ProductAttachmentAPIModelTypeEnumUploaded ProductAttachmentAPIModelTypeEnum = "Uploaded"
)

type ProductAttachmentAPIModel struct {
	ID                 *int32                             `json:"Id,omitempty"`
	Link               *string                            `json:"Link,omitempty"`
	ObfuscatedFileName *string                            `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                            `json:"OriginalFileName,omitempty"`
	Size               *int64                             `json:"Size,omitempty"`
	Type               *ProductAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
