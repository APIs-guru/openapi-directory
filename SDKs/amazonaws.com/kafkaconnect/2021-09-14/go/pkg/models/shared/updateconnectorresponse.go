package shared

type UpdateConnectorResponse struct {
	ConnectorArn   *string             `json:"connectorArn"`
	ConnectorState *ConnectorStateEnum `json:"connectorState"`
}
