package shared

type ImageClassificationDatasetMetadataClassificationTypeEnum string

const (
	ImageClassificationDatasetMetadataClassificationTypeEnumClassificationTypeUnspecified ImageClassificationDatasetMetadataClassificationTypeEnum = "CLASSIFICATION_TYPE_UNSPECIFIED"
	ImageClassificationDatasetMetadataClassificationTypeEnumMulticlass                    ImageClassificationDatasetMetadataClassificationTypeEnum = "MULTICLASS"
	ImageClassificationDatasetMetadataClassificationTypeEnumMultilabel                    ImageClassificationDatasetMetadataClassificationTypeEnum = "MULTILABEL"
)

// ImageClassificationDatasetMetadata
// Dataset metadata that is specific to image classification.
type ImageClassificationDatasetMetadata struct {
	ClassificationType *ImageClassificationDatasetMetadataClassificationTypeEnum `json:"classificationType,omitempty"`
}
