package shared

type GetActiveNamesResult struct {
	ActiveNames   []string `json:"activeNames"`
	NextPageToken *string  `json:"nextPageToken"`
}
