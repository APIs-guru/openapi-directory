package shared



type CreateConnectorResponse struct {
    ConnectorArn *string `json:"connectorArn,omitempty"`
    ConnectorName *string `json:"connectorName,omitempty"`
    ConnectorState *ConnectorStateEnum `json:"connectorState,omitempty"`
    
}

