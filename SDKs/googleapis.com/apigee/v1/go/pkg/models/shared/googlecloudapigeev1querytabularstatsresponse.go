package shared



type GoogleCloudApigeeV1QueryTabularStatsResponse struct {
    Columns []string `json:"columns,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Values [][]interface{} `json:"values,omitempty"`
    
}

