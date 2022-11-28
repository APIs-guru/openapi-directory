package shared

type TextClassificationModelMetadataClassificationTypeEnum string

const (
	TextClassificationModelMetadataClassificationTypeEnumClassificationTypeUnspecified TextClassificationModelMetadataClassificationTypeEnum = "CLASSIFICATION_TYPE_UNSPECIFIED"
	TextClassificationModelMetadataClassificationTypeEnumMulticlass                    TextClassificationModelMetadataClassificationTypeEnum = "MULTICLASS"
	TextClassificationModelMetadataClassificationTypeEnumMultilabel                    TextClassificationModelMetadataClassificationTypeEnum = "MULTILABEL"
)

// TextClassificationModelMetadata
// Model metadata that is specific to text classification.
type TextClassificationModelMetadata struct {
	ClassificationType *TextClassificationModelMetadataClassificationTypeEnum `json:"classificationType,omitempty"`
}
