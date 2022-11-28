package shared

// GoogleCloudApigeeV1QueryTabularStatsResponse
// Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.
type GoogleCloudApigeeV1QueryTabularStatsResponse struct {
	Columns       []string        `json:"columns,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
	Values        [][]interface{} `json:"values,omitempty"`
}
