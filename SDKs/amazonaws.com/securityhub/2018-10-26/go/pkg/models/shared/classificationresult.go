package shared

type ClassificationResult struct {
	AdditionalOccurrences *bool                        `json:"AdditionalOccurrences,omitempty"`
	CustomDataIdentifiers *CustomDataIdentifiersResult `json:"CustomDataIdentifiers,omitempty"`
	MimeType              *string                      `json:"MimeType,omitempty"`
	SensitiveData         []SensitiveDataResult        `json:"SensitiveData,omitempty"`
	SizeClassified        *int64                       `json:"SizeClassified,omitempty"`
	Status                *ClassificationStatus        `json:"Status,omitempty"`
}
