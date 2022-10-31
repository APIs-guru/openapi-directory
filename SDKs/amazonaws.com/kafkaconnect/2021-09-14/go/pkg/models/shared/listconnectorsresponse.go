package shared

type ListConnectorsResponse struct {
	Connectors []ConnectorSummary `json:"connectors,omitempty"`
	NextToken  *string            `json:"nextToken,omitempty"`
}
