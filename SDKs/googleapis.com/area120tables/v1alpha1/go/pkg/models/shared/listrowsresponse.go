package shared

type ListRowsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Rows          []Row   `json:"rows,omitempty"`
}
