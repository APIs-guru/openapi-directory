package shared

type GetOperationsForResourceResult struct {
	NextPageCount *string     `json:"nextPageCount"`
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
