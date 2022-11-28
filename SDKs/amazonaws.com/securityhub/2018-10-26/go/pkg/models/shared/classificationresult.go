package shared

// ClassificationResult
// Details about the sensitive data that was detected on the resource.
type ClassificationResult struct {
	AdditionalOccurrences *bool                        `json:"AdditionalOccurrences,omitempty"`
	CustomDataIdentifiers *CustomDataIdentifiersResult `json:"CustomDataIdentifiers,omitempty"`
	MimeType              *string                      `json:"MimeType,omitempty"`
	SensitiveData         []SensitiveDataResult        `json:"SensitiveData,omitempty"`
	SizeClassified        *int64                       `json:"SizeClassified,omitempty"`
	Status                *ClassificationStatus        `json:"Status,omitempty"`
}
