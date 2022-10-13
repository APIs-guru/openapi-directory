package shared

type GetConnectorsResponse struct {
	ConnectorList []Connector `json:"connectorList"`
	NextToken     *string     `json:"nextToken"`
}
