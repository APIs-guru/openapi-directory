package shared

type ListSavedReportsResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	SavedReports  []SavedReport `json:"savedReports"`
}
