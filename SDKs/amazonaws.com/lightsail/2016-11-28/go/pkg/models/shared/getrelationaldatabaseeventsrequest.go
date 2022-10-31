package shared



type GetRelationalDatabaseEventsRequest struct {
    DurationInMinutes *int64 `json:"durationInMinutes,omitempty"`
    PageToken *string `json:"pageToken,omitempty"`
    RelationalDatabaseName string `json:"relationalDatabaseName"`
    
}

