package shared



type DeleteConnectorResponse struct {
    ConnectorArn *string `json:"connectorArn,omitempty"`
    ConnectorState *ConnectorStateEnum `json:"connectorState,omitempty"`
    
}

