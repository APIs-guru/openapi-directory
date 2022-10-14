package shared

type GetOperationsForResourceResult struct {
	NextPageCount *string     `json:"nextPageCount,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	Operations    []Operation `json:"operations,omitempty"`
}
