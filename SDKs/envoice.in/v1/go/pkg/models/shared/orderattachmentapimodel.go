package shared

type OrderAttachmentAPIModelTypeEnum string

const (
	OrderAttachmentAPIModelTypeEnumExternal OrderAttachmentAPIModelTypeEnum = "External"
	OrderAttachmentAPIModelTypeEnumUploaded OrderAttachmentAPIModelTypeEnum = "Uploaded"
)

type OrderAttachmentAPIModel struct {
	Link               *string                          `json:"Link,omitempty"`
	ObfuscatedFileName *string                          `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                          `json:"OriginalFileName,omitempty"`
	Size               *int64                           `json:"Size,omitempty"`
	Type               *OrderAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
