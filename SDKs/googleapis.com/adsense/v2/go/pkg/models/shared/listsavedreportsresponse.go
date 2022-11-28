package shared

// ListSavedReportsResponse
// Response definition for the saved reports list rpc.
type ListSavedReportsResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	SavedReports  []SavedReport `json:"savedReports,omitempty"`
}
