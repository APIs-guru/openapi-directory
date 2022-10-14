package shared

type EstimationAttachmentAPIModelTypeEnum string

const (
	EstimationAttachmentAPIModelTypeEnumExternal EstimationAttachmentAPIModelTypeEnum = "External"
	EstimationAttachmentAPIModelTypeEnumUploaded EstimationAttachmentAPIModelTypeEnum = "Uploaded"
)

type EstimationAttachmentAPIModel struct {
	ID                 *int32                                `json:"Id,omitempty"`
	Link               *string                               `json:"Link,omitempty"`
	ObfuscatedFileName *string                               `json:"ObfuscatedFileName,omitempty"`
	OriginalFileName   *string                               `json:"OriginalFileName,omitempty"`
	Size               *int64                                `json:"Size,omitempty"`
	Type               *EstimationAttachmentAPIModelTypeEnum `json:"Type,omitempty"`
}
