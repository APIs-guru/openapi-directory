package shared

type SearchUserActivityResponse struct {
	NextPageToken *string               `json:"nextPageToken,omitempty"`
	SampleRate    *float64              `json:"sampleRate,omitempty"`
	Sessions      []UserActivitySession `json:"sessions,omitempty"`
	TotalRows     *int32                `json:"totalRows,omitempty"`
}
