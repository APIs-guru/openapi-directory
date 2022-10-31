package shared



type UpdateConnectorResponse struct {
    ConnectorArn *string `json:"connectorArn,omitempty"`
    ConnectorState *ConnectorStateEnum `json:"connectorState,omitempty"`
    
}

