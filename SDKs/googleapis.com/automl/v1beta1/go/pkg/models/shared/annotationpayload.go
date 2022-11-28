package shared

// AnnotationPayload
// Contains annotation information that is relevant to AutoML.
type AnnotationPayload struct {
	AnnotationSpecID     *string                         `json:"annotationSpecId,omitempty"`
	Classification       *ClassificationAnnotation       `json:"classification,omitempty"`
	DisplayName          *string                         `json:"displayName,omitempty"`
	ImageObjectDetection *ImageObjectDetectionAnnotation `json:"imageObjectDetection,omitempty"`
	Tables               *TablesAnnotation               `json:"tables,omitempty"`
	TextExtraction       *TextExtractionAnnotation       `json:"textExtraction,omitempty"`
	TextSentiment        *TextSentimentAnnotation        `json:"textSentiment,omitempty"`
	Translation          *TranslationAnnotation          `json:"translation,omitempty"`
	VideoClassification  *VideoClassificationAnnotation  `json:"videoClassification,omitempty"`
	VideoObjectTracking  *VideoObjectTrackingAnnotation  `json:"videoObjectTracking,omitempty"`
}
