package shared

type GoogleCloudApigeeV1QueryTabularStatsResponse struct {
	Columns       []string        `json:"columns"`
	NextPageToken *string         `json:"nextPageToken"`
	Values        [][]interface{} `json:"values"`
}
