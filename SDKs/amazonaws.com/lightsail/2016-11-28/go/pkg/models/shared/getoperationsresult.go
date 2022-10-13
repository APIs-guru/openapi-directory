package shared

type GetOperationsResult struct {
	NextPageToken *string     `json:"nextPageToken"`
	Operations    []Operation `json:"operations"`
}
