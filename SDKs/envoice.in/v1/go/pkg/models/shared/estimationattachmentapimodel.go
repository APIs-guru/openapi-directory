package shared

type EstimationAttachmentAPIModelTypeEnum string

const (
	EstimationAttachmentAPIModelTypeEnumExternal EstimationAttachmentAPIModelTypeEnum = "External"
	EstimationAttachmentAPIModelTypeEnumUploaded EstimationAttachmentAPIModelTypeEnum = "Uploaded"
)

type EstimationAttachmentAPIModel struct {
	ID                 *int32                                `json:"Id"`
	Link               *string                               `json:"Link"`
	ObfuscatedFileName *string                               `json:"ObfuscatedFileName"`
	OriginalFileName   *string                               `json:"OriginalFileName"`
	Size               *int64                                `json:"Size"`
	Type               *EstimationAttachmentAPIModelTypeEnum `json:"Type"`
}
