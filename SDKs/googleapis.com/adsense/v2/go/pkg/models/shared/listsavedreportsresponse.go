package shared

type ListSavedReportsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	SavedReports  []SavedReport `json:"savedReports,omitempty"`
}
