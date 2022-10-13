package shared

type GetSampleDataResponse struct {
	HeaderValues []string   `json:"HeaderValues"`
	SampleRows   [][]string `json:"SampleRows"`
}
