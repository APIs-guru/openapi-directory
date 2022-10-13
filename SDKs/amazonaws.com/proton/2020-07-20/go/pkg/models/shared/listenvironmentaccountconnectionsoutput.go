package shared

type ListEnvironmentAccountConnectionsOutput struct {
	EnvironmentAccountConnections []EnvironmentAccountConnectionSummary `json:"environmentAccountConnections"`
	NextToken                     *string                               `json:"nextToken"`
}
