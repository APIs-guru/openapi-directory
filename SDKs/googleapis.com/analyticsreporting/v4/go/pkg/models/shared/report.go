package shared

// Report
// The data response corresponding to the request.
type Report struct {
	ColumnHeader  *ColumnHeader `json:"columnHeader,omitempty"`
	Data          *ReportData   `json:"data,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
