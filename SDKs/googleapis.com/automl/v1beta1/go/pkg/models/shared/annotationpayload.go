package shared

type AnnotationPayload struct {
	AnnotationSpecID     *string                         `json:"annotationSpecId"`
	Classification       *ClassificationAnnotation       `json:"classification"`
	DisplayName          *string                         `json:"displayName"`
	ImageObjectDetection *ImageObjectDetectionAnnotation `json:"imageObjectDetection"`
	Tables               *TablesAnnotation               `json:"tables"`
	TextExtraction       *TextExtractionAnnotation       `json:"textExtraction"`
	TextSentiment        *TextSentimentAnnotation        `json:"textSentiment"`
	Translation          *TranslationAnnotation          `json:"translation"`
	VideoClassification  *VideoClassificationAnnotation  `json:"videoClassification"`
	VideoObjectTracking  *VideoObjectTrackingAnnotation  `json:"videoObjectTracking"`
}
