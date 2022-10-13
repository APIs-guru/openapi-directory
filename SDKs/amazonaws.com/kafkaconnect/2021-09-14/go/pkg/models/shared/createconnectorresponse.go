package shared

type CreateConnectorResponse struct {
	ConnectorArn   *string             `json:"connectorArn"`
	ConnectorName  *string             `json:"connectorName"`
	ConnectorState *ConnectorStateEnum `json:"connectorState"`
}
