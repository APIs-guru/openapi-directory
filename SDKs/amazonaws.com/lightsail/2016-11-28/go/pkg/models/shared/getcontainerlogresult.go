package shared



type GetContainerLogResult struct {
    LogEvents []ContainerServiceLogEvent `json:"logEvents,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

