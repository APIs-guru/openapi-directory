package shared

type JobDetails struct {
	DocumentsWithErrorsCount *int64 `json:"DocumentsWithErrorsCount,omitempty"`
	InputDocumentsCount      *int64 `json:"InputDocumentsCount,omitempty"`
	TranslatedDocumentsCount *int64 `json:"TranslatedDocumentsCount,omitempty"`
}
