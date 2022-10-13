package shared

type ClassificationResult struct {
	AdditionalOccurrences *bool                        `json:"AdditionalOccurrences"`
	CustomDataIdentifiers *CustomDataIdentifiersResult `json:"CustomDataIdentifiers"`
	MimeType              *string                      `json:"MimeType"`
	SensitiveData         []SensitiveDataResult        `json:"SensitiveData"`
	SizeClassified        *int64                       `json:"SizeClassified"`
	Status                *ClassificationStatus        `json:"Status"`
}
