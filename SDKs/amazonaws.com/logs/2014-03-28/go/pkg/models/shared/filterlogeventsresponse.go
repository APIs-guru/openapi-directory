package shared

type FilterLogEventsResponse struct {
	Events             []FilteredLogEvent  `json:"events"`
	NextToken          *string             `json:"nextToken"`
	SearchedLogStreams []SearchedLogStream `json:"searchedLogStreams"`
}
