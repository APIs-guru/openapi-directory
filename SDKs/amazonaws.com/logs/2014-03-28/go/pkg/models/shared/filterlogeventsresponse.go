package shared

type FilterLogEventsResponse struct {
	Events             []FilteredLogEvent  `json:"events,omitempty"`
	NextToken          *string             `json:"nextToken,omitempty"`
	SearchedLogStreams []SearchedLogStream `json:"searchedLogStreams,omitempty"`
}
