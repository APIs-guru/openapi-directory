package shared

type CreateResolverEndpointRequest struct {
	CreatorRequestID string                        `json:"CreatorRequestId"`
	Direction        ResolverEndpointDirectionEnum `json:"Direction"`
	IPAddresses      []IPAddressRequest            `json:"IpAddresses"`
	Name             *string                       `json:"Name"`
	SecurityGroupIds []string                      `json:"SecurityGroupIds"`
	Tags             []Tag                         `json:"Tags"`
}
