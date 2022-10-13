package shared

type SearchUserActivityResponse struct {
	NextPageToken *string               `json:"nextPageToken"`
	SampleRate    *float64              `json:"sampleRate"`
	Sessions      []UserActivitySession `json:"sessions"`
	TotalRows     *int32                `json:"totalRows"`
}
