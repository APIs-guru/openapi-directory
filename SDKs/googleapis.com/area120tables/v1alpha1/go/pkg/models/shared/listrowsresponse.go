package shared

type ListRowsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Rows          []Row   `json:"rows"`
}
