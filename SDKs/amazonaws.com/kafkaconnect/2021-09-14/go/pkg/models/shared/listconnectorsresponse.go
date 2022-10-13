package shared

type ListConnectorsResponse struct {
	Connectors []ConnectorSummary `json:"connectors"`
	NextToken  *string            `json:"nextToken"`
}
