package shared

// JobDetails
// The number of documents successfully and unsuccessfully processed during a translation job.
type JobDetails struct {
	DocumentsWithErrorsCount *int64 `json:"DocumentsWithErrorsCount,omitempty"`
	InputDocumentsCount      *int64 `json:"InputDocumentsCount,omitempty"`
	TranslatedDocumentsCount *int64 `json:"TranslatedDocumentsCount,omitempty"`
}
