package shared

type ClassificationResult struct {
	AdditionalOccurrences *bool                       `json:"additionalOccurrences,omitempty"`
	CustomDataIdentifiers *CustomDataIdentifiers      `json:"customDataIdentifiers,omitempty"`
	MimeType              *string                     `json:"mimeType,omitempty"`
	SensitiveData         []SensitiveDataItem         `json:"sensitiveData,omitempty"`
	SizeClassified        *int64                      `json:"sizeClassified,omitempty"`
	Status                *ClassificationResultStatus `json:"status,omitempty"`
}
