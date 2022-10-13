package shared

type JobDetails struct {
	DocumentsWithErrorsCount *int64 `json:"DocumentsWithErrorsCount"`
	InputDocumentsCount      *int64 `json:"InputDocumentsCount"`
	TranslatedDocumentsCount *int64 `json:"TranslatedDocumentsCount"`
}
