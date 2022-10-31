package shared



type ListEnvironmentAccountConnectionsInput struct {
    EnvironmentName *string `json:"environmentName,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestedBy EnvironmentAccountConnectionRequesterAccountTypeEnum `json:"requestedBy"`
    Statuses []EnvironmentAccountConnectionStatusEnum `json:"statuses,omitempty"`
    
}

