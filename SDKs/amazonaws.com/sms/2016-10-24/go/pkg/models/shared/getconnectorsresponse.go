package shared

type GetConnectorsResponse struct {
	ConnectorList []Connector `json:"connectorList,omitempty"`
	NextToken     *string     `json:"nextToken,omitempty"`
}
