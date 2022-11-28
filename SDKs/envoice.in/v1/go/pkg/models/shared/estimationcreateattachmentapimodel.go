package shared

type EstimationCreateAttachmentAPIModelTypeEnum string

const (
	EstimationCreateAttachmentAPIModelTypeEnumExternal EstimationCreateAttachmentAPIModelTypeEnum = "External"
	EstimationCreateAttachmentAPIModelTypeEnumUploaded EstimationCreateAttachmentAPIModelTypeEnum = "Uploaded"
)

type EstimationCreateAttachmentAPIModel struct {
	Link               *string                                     `json:"Link,omitempty"`
	ObfuscatedFileName *string                                     `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                                     `json:"OriginalFileName,omitempty"`
	Size               *int64                                      `json:"Size,omitempty"`
	Type               *EstimationCreateAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
