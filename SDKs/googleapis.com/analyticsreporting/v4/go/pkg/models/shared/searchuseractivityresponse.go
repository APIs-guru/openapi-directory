package shared

// SearchUserActivityResponse
// The response from `userActivity:get` call.
type SearchUserActivityResponse struct {
	NextPageToken *string               `json:"nextPageToken,omitempty"`
	SampleRate    *float64              `json:"sampleRate,omitempty"`
	Sessions      []UserActivitySession `json:"sessions,omitempty"`
	TotalRows     *int32                `json:"totalRows,omitempty"`
}
