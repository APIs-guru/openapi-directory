package shared

type EstimationUpdateAttachmentAPIModelTypeEnum string

const (
	EstimationUpdateAttachmentAPIModelTypeEnumExternal EstimationUpdateAttachmentAPIModelTypeEnum = "External"
	EstimationUpdateAttachmentAPIModelTypeEnumUploaded EstimationUpdateAttachmentAPIModelTypeEnum = "Uploaded"
)

type EstimationUpdateAttachmentAPIModel struct {
	ID                 *int32                                      `json:"Id,omitempty"`
	Link               *string                                     `json:"Link,omitempty"`
	ObfuscatedFileName *string                                     `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                                     `json:"OriginalFileName,omitempty"`
	Size               *int64                                      `json:"Size,omitempty"`
	Type               *EstimationUpdateAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
