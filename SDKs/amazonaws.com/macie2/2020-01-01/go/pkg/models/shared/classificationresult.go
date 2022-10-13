package shared

type ClassificationResult struct {
	AdditionalOccurrences *bool                       `json:"additionalOccurrences"`
	CustomDataIdentifiers *CustomDataIdentifiers      `json:"customDataIdentifiers"`
	MimeType              *string                     `json:"mimeType"`
	SensitiveData         []SensitiveDataItem         `json:"sensitiveData"`
	SizeClassified        *int64                      `json:"sizeClassified"`
	Status                *ClassificationResultStatus `json:"status"`
}
