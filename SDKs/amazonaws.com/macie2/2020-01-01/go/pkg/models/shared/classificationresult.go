package shared

// ClassificationResult
// Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
type ClassificationResult struct {
	AdditionalOccurrences *bool                       `json:"additionalOccurrences,omitempty"`
	CustomDataIdentifiers *CustomDataIdentifiers      `json:"customDataIdentifiers,omitempty"`
	MimeType              *string                     `json:"mimeType,omitempty"`
	SensitiveData         []SensitiveDataItem         `json:"sensitiveData,omitempty"`
	SizeClassified        *int64                      `json:"sizeClassified,omitempty"`
	Status                *ClassificationResultStatus `json:"status,omitempty"`
}
