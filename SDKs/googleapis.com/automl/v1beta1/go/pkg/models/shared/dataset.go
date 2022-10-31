package shared



type Dataset struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    ExampleCount *int32 `json:"exampleCount,omitempty"`
    ImageClassificationDatasetMetadata *ImageClassificationDatasetMetadata `json:"imageClassificationDatasetMetadata,omitempty"`
    ImageObjectDetectionDatasetMetadata map[string]interface{} `json:"imageObjectDetectionDatasetMetadata,omitempty"`
    Name *string `json:"name,omitempty"`
    TablesDatasetMetadata *TablesDatasetMetadata `json:"tablesDatasetMetadata,omitempty"`
    TextClassificationDatasetMetadata *TextClassificationDatasetMetadata `json:"textClassificationDatasetMetadata,omitempty"`
    TextExtractionDatasetMetadata map[string]interface{} `json:"textExtractionDatasetMetadata,omitempty"`
    TextSentimentDatasetMetadata *TextSentimentDatasetMetadata `json:"textSentimentDatasetMetadata,omitempty"`
    TranslationDatasetMetadata *TranslationDatasetMetadata `json:"translationDatasetMetadata,omitempty"`
    VideoClassificationDatasetMetadata map[string]interface{} `json:"videoClassificationDatasetMetadata,omitempty"`
    VideoObjectTrackingDatasetMetadata map[string]interface{} `json:"videoObjectTrackingDatasetMetadata,omitempty"`
    
}

