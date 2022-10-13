package shared

type ListEnvironmentAccountConnectionsInput struct {
	EnvironmentName *string                                              `json:"environmentName"`
	MaxResults      *int64                                               `json:"maxResults"`
	NextToken       *string                                              `json:"nextToken"`
	RequestedBy     EnvironmentAccountConnectionRequesterAccountTypeEnum `json:"requestedBy"`
	Statuses        []EnvironmentAccountConnectionStatusEnum             `json:"statuses"`
}
