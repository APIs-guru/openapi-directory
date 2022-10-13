package shared

type Dataset struct {
	CreateTime                          *string                             `json:"createTime"`
	Description                         *string                             `json:"description"`
	DisplayName                         *string                             `json:"displayName"`
	Etag                                *string                             `json:"etag"`
	ExampleCount                        *int32                              `json:"exampleCount"`
	ImageClassificationDatasetMetadata  *ImageClassificationDatasetMetadata `json:"imageClassificationDatasetMetadata"`
	ImageObjectDetectionDatasetMetadata map[string]interface{}              `json:"imageObjectDetectionDatasetMetadata"`
	Name                                *string                             `json:"name"`
	TablesDatasetMetadata               *TablesDatasetMetadata              `json:"tablesDatasetMetadata"`
	TextClassificationDatasetMetadata   *TextClassificationDatasetMetadata  `json:"textClassificationDatasetMetadata"`
	TextExtractionDatasetMetadata       map[string]interface{}              `json:"textExtractionDatasetMetadata"`
	TextSentimentDatasetMetadata        *TextSentimentDatasetMetadata       `json:"textSentimentDatasetMetadata"`
	TranslationDatasetMetadata          *TranslationDatasetMetadata         `json:"translationDatasetMetadata"`
	VideoClassificationDatasetMetadata  map[string]interface{}              `json:"videoClassificationDatasetMetadata"`
	VideoObjectTrackingDatasetMetadata  map[string]interface{}              `json:"videoObjectTrackingDatasetMetadata"`
}
