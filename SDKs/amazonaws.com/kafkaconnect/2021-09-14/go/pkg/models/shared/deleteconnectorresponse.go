package shared

type DeleteConnectorResponse struct {
	ConnectorArn   *string             `json:"connectorArn"`
	ConnectorState *ConnectorStateEnum `json:"connectorState"`
}
