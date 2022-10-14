package shared

type TextClassificationDatasetMetadataClassificationTypeEnum string

const (
	TextClassificationDatasetMetadataClassificationTypeEnumClassificationTypeUnspecified TextClassificationDatasetMetadataClassificationTypeEnum = "CLASSIFICATION_TYPE_UNSPECIFIED"
	TextClassificationDatasetMetadataClassificationTypeEnumMulticlass                    TextClassificationDatasetMetadataClassificationTypeEnum = "MULTICLASS"
	TextClassificationDatasetMetadataClassificationTypeEnumMultilabel                    TextClassificationDatasetMetadataClassificationTypeEnum = "MULTILABEL"
)

type TextClassificationDatasetMetadata struct {
	ClassificationType *TextClassificationDatasetMetadataClassificationTypeEnum `json:"classificationType,omitempty"`
}
