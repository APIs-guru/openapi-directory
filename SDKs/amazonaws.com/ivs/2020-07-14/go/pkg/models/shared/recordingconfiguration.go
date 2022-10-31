package shared



type RecordingConfiguration struct {
    Arn string `json:"arn"`
    DestinationConfiguration DestinationConfiguration `json:"destinationConfiguration"`
    Name *string `json:"name,omitempty"`
    State RecordingConfigurationStateEnum `json:"state"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

