package shared

type ListServiceInstancesInput struct {
	MaxResults  *int64  `json:"maxResults"`
	NextToken   *string `json:"nextToken"`
	ServiceName *string `json:"serviceName"`
}
